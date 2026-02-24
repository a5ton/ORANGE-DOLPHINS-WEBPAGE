"use client";

import { useEffect, type ReactNode } from "react";

/**
 * After the user stops scrolling, nudges the page so the nearest
 * [data-snap] section aligns flush below the navbar.
 *
 * Threshold = 100 % of viewport height (1 full screen).
 * This is the key value:
 *   - Short sections (~100 vh): snap fires throughout → feels fully snapped.
 *   - VisionStatement (400 vh track): first 100 vh snaps to VS start,
 *     middle 200 vh is free-scroll (slides), last 100 vh snaps to
 *     MissionStatement — completely eliminating the no-man's-land gap
 *     that appeared when the sticky panel released at the 300 vh mark.
 *
 * An `isSnapping` flag prevents the programmatic scrollTo() from
 * re-triggering the logic mid-animation (cascading snap loop).
 */
export function ScrollSnapPage({ children }: { children: ReactNode }) {
  useEffect(() => {
    const NAV_H = 64; // matches h-16 navbar
    let isSnapping = false;

    const snapToNearest = () => {
      if (isSnapping) return;

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap]"),
      );
      if (!sections.length) return;

      // 100 % viewport → bridges the full no-man's-land between sections
      const threshold = window.innerHeight;

      let closest: { scrollTarget: number; dist: number } | null = null;

      for (const el of sections) {
        const diff = el.getBoundingClientRect().top - NAV_H;
        const dist = Math.abs(diff);

        if (dist < threshold && (!closest || dist < closest.dist)) {
          closest = { scrollTarget: window.scrollY + diff, dist };
        }
      }

      // Skip if already well-aligned (< 6 px) to avoid pointless micro-scrolls
      if (closest && closest.dist > 6) {
        isSnapping = true;
        window.scrollTo({
          top: Math.max(0, closest.scrollTarget),
          behavior: "smooth",
        });
        // Hold lock until smooth scroll settles (~600 ms typical)
        setTimeout(() => {
          isSnapping = false;
        }, 800);
      }
    };

    // scrollend fires once inertia/momentum has fully stopped.
    // Supported in Chrome 114+, Firefox 109+, Safari 16.4+.
    window.addEventListener("scrollend", snapToNearest);

    // 150 ms debounce fallback for older browsers
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (isSnapping) return; // ignore events from our own scrollTo()
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(snapToNearest, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scrollend", snapToNearest);
      window.removeEventListener("scroll", onScroll);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  return <>{children}</>;
}
