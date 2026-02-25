"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollHijackProps {
  slides: React.ReactNode[];
  panelClassName?: string;
}

/**
 * ScrollHijack — full-lock sticky slide section.
 *
 * When the sticky panel reaches the top of the viewport the page scroll is
 * locked (overflow:hidden on <html>). The user then scrolls deliberately
 * through each slide one at a time. On the final slide a further scroll
 * down releases the lock and continues the page. A "Skip" button also
 * releases immediately.
 */
export function ScrollHijack({ slides, panelClassName }: ScrollHijackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentIdxRef = useRef(0); // sync ref for event handlers
  const lockedRef = useRef(false);  // cooldown between slides
  const n = slides.length;

  // ── Apply slide styles directly to DOM (no re-render needed) ────────────
  const applySlide = (idx: number, instant = false) => {
    const DURATION = 500;
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

    currentIdxRef.current = idx;
    setCurrentIdx(idx);
  };

  // ── Lock / unlock page scroll ─────────────────────────────────────────
  const lockPage = () => {
    document.documentElement.style.overflow = "hidden";
  };

  const unlockPage = () => {
    document.documentElement.style.overflow = "";
  };

  // ── Skip: jump to end of section and unlock ───────────────────────────
  const skip = () => {
    unlockPage();
    const track = trackRef.current;
    if (!track) return;
    // Scroll just past the end of the track
    window.scrollTo({ top: track.offsetTop + track.offsetHeight, behavior: "smooth" });
    applySlide(n - 1, true);
  };

  useEffect(() => {
    const COOLDOWN = 650;
    const WHEEL_THRESHOLD = 25;
    let wheelAccum = 0;
    let wheelTimer = 0;
    let touchStartY = 0;
    let isPinned = false;

    applySlide(0, true);

    // ── Check if section is pinned at top of viewport ─────────────────────
    const checkPin = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const nowPinned = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (nowPinned && !isPinned) {
        // Just pinned — lock page, snap to correct slide based on direction
        isPinned = true;
        const scrollY = window.scrollY;
        const enteredFromBelow = scrollY >= track.offsetTop + (n - 0.5) * window.innerHeight;
        if (enteredFromBelow && currentIdxRef.current !== n - 1) {
          applySlide(n - 1, true);
        } else if (!enteredFromBelow && currentIdxRef.current !== 0) {
          applySlide(0, true);
        }
        lockPage();
      } else if (!nowPinned && isPinned) {
        // Just unpinned — unlock
        isPinned = false;
        unlockPage();
      }
    };

    // ── Advance one slide ─────────────────────────────────────────────────
    const advance = (dir: number) => {
      if (lockedRef.current) return;
      const idx = currentIdxRef.current;
      const next = idx + dir;

      if (next < 0) {
        // Before first slide — release upward
        unlockPage();
        isPinned = false;
        const track = trackRef.current;
        if (track) window.scrollTo({ top: track.offsetTop - 10, behavior: "smooth" });
        return;
      }
      if (next >= n) {
        // After last slide — release downward
        unlockPage();
        isPinned = false;
        const track = trackRef.current;
        if (track) window.scrollTo({ top: track.offsetTop + track.offsetHeight + 10, behavior: "smooth" });
        return;
      }

      lockedRef.current = true;
      applySlide(next);
      setTimeout(() => { lockedRef.current = false; }, COOLDOWN);
    };

    // ── Wheel ─────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      checkPin();
      if (!isPinned) return;

      e.preventDefault(); // always prevent when pinned

      // While cooldown is active, discard ALL wheel input so a big flick
      // cannot queue up and fire again the moment the lock releases
      if (lockedRef.current) {
        wheelAccum = 0;
        clearTimeout(wheelTimer);
        return;
      }

      wheelAccum += e.deltaY;
      clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => { wheelAccum = 0; }, 200);

      if (Math.abs(wheelAccum) < WHEEL_THRESHOLD) return;
      const dir = wheelAccum > 0 ? 1 : -1;
      wheelAccum = 0; // reset before advance so residual delta can't re-fire
      advance(dir);
    };

    // ── Touch ─────────────────────────────────────────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      checkPin();
      if (!isPinned) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 40) return;
      e.preventDefault();
      advance(diff > 0 ? 1 : -1);
    };

    // ── Keyboard ──────────────────────────────────────────────────────────
    const onKey = (e: KeyboardEvent) => {
      if (!isPinned) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); advance(1); }
      else if (e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); advance(-1); }
    };

    // ── Scroll listener to detect pin/unpin ──────────────────────────────
    const onScroll = () => { checkPin(); };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial check in case page loads mid-section
    checkPin();

    return () => {
      unlockPage(); // always restore on unmount
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(wheelTimer);
    };
  }, [n]); // eslint-disable-line react-hooks/exhaustive-deps

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

        {/* Progress dots */}
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

        {/* Skip button */}
        <button
          onClick={skip}
          aria-label="Skip this section"
          className="absolute bottom-8 right-8 z-10 flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-sans tracking-widest uppercase transition-colors duration-200"
        >
          Skip
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
