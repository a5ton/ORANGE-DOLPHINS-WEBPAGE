"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollHijackProps {
  slides: React.ReactNode[];
  panelClassName?: string;
}

/**
 * ScrollHijack — sticky parallax slide section.
 *
 * Architecture:
 * - A tall scroll track (n × 100vh) keeps the sticky panel pinned.
 * - Slides advance ONE AT A TIME, gated by a cooldown after each transition.
 *   This means fast scrolling still steps through every slide in order —
 *   you can never jump from slide 0 to slide 3 by scrolling fast.
 * - The page scroll position is kept in sync with the current slide index
 *   so the section exits cleanly when the last slide is done.
 * - Wheel, touch, and keyboard are all handled.
 */
export function ScrollHijack({ slides, panelClassName }: ScrollHijackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const n = slides.length;

  useEffect(() => {
    const DURATION = 500;       // slide transition duration (ms)
    const COOLDOWN = 700;       // ms to lock after a transition — prevents skipping
    const WHEEL_THRESHOLD = 30; // min accumulated wheel delta to trigger advance

    let currentIdx = 0;
    let locked = false;
    let wheelAccum = 0;
    let wheelResetTimer = 0;
    let touchStartY = 0;

    // Momentum drain: ignore wheel input for this many ms after the section
    // first pins. Prevents scroll momentum that brought the section into view
    // from immediately triggering a slide advance.
    const ENTRY_DRAIN = 600;
    let draining = false;
    let drainTimer = 0;
    let wasPinned = false;

    // ── Apply a slide ──────────────────────────────────────────────────────
    const applySlide = (idx: number, instant = false) => {
      const transition = instant
        ? "none"
        : `opacity ${DURATION}ms cubic-bezier(0.16,1,0.3,1), transform ${DURATION}ms cubic-bezier(0.16,1,0.3,1)`;

      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transition = transition;
        if (i === idx) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0px) scale(1)";
          el.style.pointerEvents = "auto";
          el.setAttribute("aria-hidden", "false");
        } else if (i < idx) {
          el.style.opacity = "0";
          el.style.transform = "translateY(-40px) scale(0.96)";
          el.style.pointerEvents = "none";
          el.setAttribute("aria-hidden", "true");
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateY(40px) scale(1)";
          el.style.pointerEvents = "none";
          el.setAttribute("aria-hidden", "true");
        }
      });

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.style.transition = instant ? "none" : "width 0.4s ease, background-color 0.4s ease";
        dot.style.width = i === idx ? "24px" : "6px";
        dot.style.backgroundColor = i === idx ? "#f97316" : "rgba(255,255,255,0.35)";
      });
    };

    // ── Check if section is currently pinned/visible ───────────────────────
    const isSectionActive = (): boolean => {
      const track = trackRef.current;
      if (!track) return false;
      const rect = track.getBoundingClientRect();
      // Active when the sticky panel is fully covering the viewport
      return rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
    };

    // ── Advance by one slide in direction (+1 / -1) ────────────────────────
    const tryAdvance = (dir: number): boolean => {
      if (locked) return false;
      if (!isSectionActive()) return false;

      const next = currentIdx + dir;

      // At the boundaries — let page scroll continue naturally
      if (next < 0 || next >= n) return false;

      currentIdx = next;
      applySlide(currentIdx);

      // Snap page scroll to match the slide so the section exits correctly
      const track = trackRef.current;
      if (track) {
        const targetScroll = track.offsetTop + currentIdx * window.innerHeight;
        window.scrollTo({ top: targetScroll, behavior: "instant" });
      }

      locked = true;
      setTimeout(() => { locked = false; }, COOLDOWN);
      return true;
    };

    // ── Wheel ──────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      const pinned = isSectionActive();

      // Detect the moment the section becomes pinned and start drain window
      if (pinned && !wasPinned) {
        // If entering from below (scrolling up), snap to last slide
        const track = trackRef.current;
        if (track) {
          const scrollY = window.scrollY;
          const enteredFromBelow = scrollY < track.offsetTop + (n - 1) * window.innerHeight;
          if (!enteredFromBelow && currentIdx !== n - 1) {
            currentIdx = n - 1;
            applySlide(currentIdx, true);
          }
        }
        draining = true;
        wheelAccum = 0;
        clearTimeout(drainTimer);
        drainTimer = window.setTimeout(() => { draining = false; }, ENTRY_DRAIN);
      }
      wasPinned = pinned;

      if (!pinned) return;
      if (draining) { e.preventDefault(); return; } // absorb momentum, don't advance

      wheelAccum += e.deltaY;
      clearTimeout(wheelResetTimer);
      wheelResetTimer = window.setTimeout(() => { wheelAccum = 0; }, 150);

      if (Math.abs(wheelAccum) < WHEEL_THRESHOLD) return;

      const dir = wheelAccum > 0 ? 1 : -1;
      wheelAccum = 0;

      // At boundary — don't intercept, let page scroll
      if ((dir === 1 && currentIdx >= n - 1) || (dir === -1 && currentIdx <= 0)) return;

      e.preventDefault();
      tryAdvance(dir);
    };

    // ── Touch ──────────────────────────────────────────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isSectionActive()) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 40) return;
      const dir = diff > 0 ? 1 : -1;
      if ((dir === 1 && currentIdx >= n - 1) || (dir === -1 && currentIdx <= 0)) return;
      e.preventDefault();
      tryAdvance(dir);
    };

    // ── Keyboard ───────────────────────────────────────────────────────────
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (tryAdvance(1)) e.preventDefault();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (tryAdvance(-1)) e.preventDefault();
      }
    };

    // Init
    applySlide(0, true);

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      clearTimeout(wheelResetTimer);
      clearTimeout(drainTimer);
    };
  }, [n]);

  return (
    <div
      ref={trackRef}
      style={{ height: `${n * 100}vh` }}
      className="relative"
    >
      <div className={cn("sticky top-0 h-screen overflow-hidden", panelClassName)}>
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => { slideRefs.current[i] = el; }}
            aria-hidden={i !== 0}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: i === 0 ? 1 : 0,
              transform: i === 0 ? "translateY(0px) scale(1)" : "translateY(40px) scale(1)",
              pointerEvents: i === 0 ? "auto" : "none",
              willChange: "transform, opacity",
            }}
          >
            {slide}
          </div>
        ))}

        {n > 1 && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"
            aria-hidden="true"
          >
            {slides.map((_, i) => (
              <span
                key={i}
                ref={(el) => { dotRefs.current[i] = el; }}
                style={{
                  display: "block",
                  borderRadius: "9999px",
                  height: "6px",
                  width: i === 0 ? "24px" : "6px",
                  backgroundColor: i === 0 ? "#f97316" : "rgba(255,255,255,0.35)",
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
