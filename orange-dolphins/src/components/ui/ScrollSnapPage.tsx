"use client";

import { useEffect, type ReactNode } from "react";

/**
 * After the user stops scrolling, nudges the page so the nearest
 * [data-snap] section aligns flush with the bottom of the navbar.
 *
 * Uses the native `scrollend` event (fires once momentum fully stops) with a
 * 150 ms debounce fallback for older browsers.
 *
 * An `isSnapping` flag prevents the programmatic smooth-scroll from
 * re-triggering the snap logic mid-animation.
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

      // 25 % of viewport height — tight enough to avoid firing mid-section,
      // wide enough to catch users who stop a little before/after a boundary.
      const threshold = window.innerHeight * 0.25;

      let closest: { scrollTarget: number; dist: number } | null = null;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        // diff > 0 → section top is below the nav line (not yet reached)
        // diff < 0 → section top is above the nav line (slightly passed)
        const diff = rect.top - NAV_H;
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
        // Release the lock once the smooth scroll settles (~600 ms typical)
        setTimeout(() => {
          isSnapping = false;
        }, 700);
      }
    };

    // scrollend fires once inertia/momentum has fully stopped.
    // Supported in Chrome 114+, Firefox 109+, Safari 16.4+.
    window.addEventListener("scrollend", snapToNearest);

    // 150 ms debounce fallback for older browsers
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (isSnapping) return; // ignore scroll events from our own scrollTo()
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
