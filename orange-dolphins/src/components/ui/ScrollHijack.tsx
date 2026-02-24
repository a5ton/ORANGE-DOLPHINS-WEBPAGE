"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollHijackProps {
  slides: React.ReactNode[];
  /**
   * How many viewport heights of scroll track each slide gets (default 100).
   * Higher = more breathing room inside a slide before it advances.
   */
  speedPerSlide?: number;
  /**
   * Tailwind class(es) applied to the sticky viewport-pinned panel.
   * Use this to match the parent section's background so the panel fully
   * covers the page behind it during the sticky-release handoff — preventing
   * the next section from bleeding through (e.g. "bg-grey-100").
   */
  panelClassName?: string;
}

/**
 * Scroll-hijack with discrete slide snapping.
 *
 * Architecture:
 *  - A tall scroll track (n × speedPerSlide vh) keeps the sticky panel pinned.
 *  - rawProgress maps the STICKY phase (top: 0 → -(height−vh)) to 0→1.
 *    It starts from zero when the section is fully pinned at the top of the
 *    viewport — NOT from when it first enters from below.  This gives the
 *    first slide a full slide-zone of buffer before it transitions, preventing
 *    accidental jumps when the user scrolls into the section.
 *  - targetIdx = Math.floor(rawProgress × n) — switches once per "slide zone".
 *  - When targetIdx changes, a CSS transition (400 ms, spring ease) animates
 *    the outgoing slide out and the incoming slide in.
 *  - Transitions are never blocked mid-animation — interrupting one simply
 *    starts the next from the current visual state, which feels natural on
 *    fast scroll (similar to drag-and-release behaviour).
 *
 * Because the trigger is integer-based (not fractional), the user is always
 * looking at either a fully-visible slide or a short cross-fade between two
 * fully-visible slides — exactly the behaviour of the reference sites.
 */
export function ScrollHijack({ slides, speedPerSlide = 100, panelClassName }: ScrollHijackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const n = slides.length;

  useEffect(() => {
    const DURATION = 400; // ms — must match the CSS transition values below

    let currentIdx = -1; // -1 forces the first applySlide to run
    let animating = false;
    let animTimer = 0;
    let rafId = 0;

    /**
     * Drive all slide + dot elements to show `idx` as the active slide.
     * Pass `instant = true` on mount to set the initial state with no animation.
     */
    const applySlide = (idx: number, instant = false) => {
      if (idx === currentIdx) return;
      // Transitions are never blocked — interrupting one starts the next from
      // the current visual state, which feels natural on fast scroll.

      clearTimeout(animTimer);
      currentIdx = idx;
      animating = !instant;

      const transition = instant
        ? "none"
        : `opacity ${DURATION}ms cubic-bezier(0.16,1,0.3,1), transform ${DURATION}ms cubic-bezier(0.16,1,0.3,1)`;

      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transition = transition;

        if (i === idx) {
          // Active slide: fully visible, centred
          el.style.opacity = "1";
          el.style.transform = "translateY(0px) scale(1)";
          el.style.pointerEvents = "auto";
          el.setAttribute("aria-hidden", "false");
        } else if (i < idx) {
          // Past slide: ghosted above
          el.style.opacity = "0";
          el.style.transform = "translateY(-40px) scale(0.96)";
          el.style.pointerEvents = "none";
          el.setAttribute("aria-hidden", "true");
        } else {
          // Future slide: waiting below
          el.style.opacity = "0";
          el.style.transform = "translateY(50px) scale(1)";
          el.style.pointerEvents = "none";
          el.setAttribute("aria-hidden", "true");
        }
      });

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.style.transition = instant
          ? "none"
          : "width 0.4s ease, background-color 0.4s ease";
        dot.style.width = i === idx ? "24px" : "6px";
        dot.style.backgroundColor =
          i === idx ? "#f97316" : "rgba(156, 163, 175, 0.4)";
      });

      if (animating) {
        animTimer = window.setTimeout(() => {
          animating = false;
          // After debounce window, re-sync in case scroll moved on
          const el = trackRef.current;
          if (!el) return;
          const { top, height } = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const rp = Math.max(0, Math.min(1, (vh - top) / height));
          const ti = Math.max(0, Math.min(n - 1, Math.floor(rp * n)));
          applySlide(ti);
        }, DURATION + 80);
      }
    };

    // Set slide 0 immediately with no transition
    applySlide(0, true);

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) return;

        const { top, height } = track.getBoundingClientRect();
        const vh = window.innerHeight;

        // Outside our section entirely — nothing to do
        if (top > vh || -top > height) return;

        // rawProgress: 0 when section is pinned at top (rect.top = 0),
        // 1 when the track is fully scrolled through.
        // Starting from the PINNED state (not from when the section enters
        // from below) gives slide 0 a full zone of buffer — the user must
        // scroll an entire slide-zone past the snap point before slide 1 shows.
        const stickyRange = Math.max(1, height - vh);
        const rawProgress = Math.max(0, Math.min(1, -top / stickyRange));

        // Integer slide index — each slide owns 1/n of the progress range
        const targetIdx = Math.max(0, Math.min(n - 1, Math.floor(rawProgress * n)));

        applySlide(targetIdx);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync immediately on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(animTimer);
    };
  }, [n]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={trackRef} style={{ height: `${n * speedPerSlide}vh` }} className="relative">
      {/* Sticky viewport-pinned panel */}
      <div className={cn("sticky top-0 h-screen overflow-hidden", panelClassName)}>
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
              // Initial state before JS runs — slide 0 visible, rest below
              opacity: i === 0 ? 1 : 0,
              transform:
                i === 0 ? "translateY(0px) scale(1)" : "translateY(50px) scale(1)",
              pointerEvents: i === 0 ? "auto" : "none",
              willChange: "transform, opacity",
            }}
          >
            {slide}
          </div>
        ))}

        {/* Progress dots */}
        {n > 1 && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"
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
                  transition:
                    "width 0.35s cubic-bezier(0.16,1,0.3,1), background-color 0.35s ease",
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
