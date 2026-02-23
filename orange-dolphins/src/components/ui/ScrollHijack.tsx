"use client";

import { useEffect, useRef } from "react";

interface ScrollHijackProps {
  slides: React.ReactNode[];
  /** How many vh of scroll track per slide (default 120) */
  speedPerSlide?: number;
}

// Smooth ease-in-out curve
function ease(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/**
 * Scroll-hijack component.
 *
 * Renders a tall scroll track. While the track is in view the inner panel
 * stays pinned (position: sticky) and slides transition based on scroll
 * progress through the track.
 *
 * Performance: uses direct DOM style writes + requestAnimationFrame — no
 * React state updates on scroll, so the browser compositor runs the animation
 * at full frame rate with zero React re-render overhead.
 *
 * Visual: slides cross-fade (overlap window of 15% on each side) so the
 * outgoing slide fades while the incoming one rises, exactly like the
 * reference sites (mushstudios, amourliquide, studiorotate).
 */
export function ScrollHijack({ slides, speedPerSlide = 120 }: ScrollHijackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const n = slides.length;

  // Cross-fade window: slide starts entering at local = ENTER (-0.15)
  // and starts exiting at local = EXIT (0.85). At any given moment during
  // the transition, the exiting slide (local 0.85→1) and the entering slide
  // (local -0.15→0) are both partially visible — a proper cross-fade.
  const ENTER = -0.15;
  const EXIT = 0.85;

  useEffect(() => {
    const update = () => {
      const track = trackRef.current;
      if (!track) return;

      const { top, height } = track.getBoundingClientRect();
      const vh = window.innerHeight;

      // rawProgress: 0 when track enters viewport, 1 when track fully scrolled
      const rawProgress = Math.max(0, Math.min(1, (vh - top) / height));

      slideRefs.current.forEach((el, i) => {
        if (!el) return;

        // Each slide owns a [0,1] band of rawProgress.
        // local < 0: slide is in the future; local > 1: slide is in the past.
        const local = rawProgress * n - i;

        let opacity: number;
        let translateY: number;
        let scale: number;
        let pointerEvents: string;

        if (local <= ENTER) {
          // Future — hidden below the pinned panel
          opacity = 0;
          translateY = 50;
          scale = 1;
          pointerEvents = "none";
        } else if (local < 0) {
          // Entering — cross-fading in while previous slide exits
          const t = ease((local - ENTER) / -ENTER); // 0→1
          opacity = t;
          translateY = (1 - t) * 50;
          scale = 1;
          pointerEvents = "none";
        } else if (local < EXIT) {
          // Active — fully in view
          opacity = 1;
          translateY = 0;
          scale = 1;
          pointerEvents = "auto";
        } else if (local < 1) {
          // Exiting — cross-fading out while next slide enters
          const t = ease((local - EXIT) / (1 - EXIT)); // 0→1
          opacity = 1 - t;
          translateY = -t * 30;
          scale = 1 - t * 0.04;
          pointerEvents = "none";
        } else {
          // Past — hidden above the pinned panel
          opacity = 0;
          translateY = -30;
          scale = 0.96;
          pointerEvents = "none";
        }

        el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
        el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        el.style.pointerEvents = pointerEvents;
      });

      // Update progress dots
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const local = rawProgress * n - i;
        // Dot is "active" when its slide is the dominant one on screen
        const isActive = local >= 0 && local < EXIT;
        dot.style.width = isActive ? "24px" : "6px";
        dot.style.backgroundColor = isActive
          ? "#f97316"
          : "rgba(156, 163, 175, 0.4)";
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once immediately so the initial state is correct
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [n]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={trackRef} style={{ height: `${n * speedPerSlide}vh` }} className="relative">
      {/* Sticky viewport-pinned display area */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            aria-hidden={i !== 0}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // Initial state applied before first scroll event fires
              opacity: i === 0 ? 1 : 0,
              transform:
                i === 0
                  ? "translateY(0px) scale(1)"
                  : "translateY(50px) scale(1)",
              pointerEvents: i === 0 ? "auto" : "none",
              // GPU-accelerate the animated properties
              willChange: "transform, opacity",
            }}
          >
            {slide}
          </div>
        ))}

        {/* Progress dots */}
        {n > 1 && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
            aria-hidden="true"
          >
            {slides.map((_, i) => (
              <span
                key={i}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                style={{
                  display: "block",
                  borderRadius: "9999px",
                  height: "6px",
                  width: i === 0 ? "24px" : "6px",
                  backgroundColor:
                    i === 0 ? "#f97316" : "rgba(156, 163, 175, 0.4)",
                  transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), background-color 0.35s ease",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
