"use client";

import { useEffect, type ReactNode } from "react";

/**
 * After the user stops scrolling, nudges the page so the nearest
 * [data-snap] section aligns flush with the bottom of the navbar.
 *
 * Why JS instead of CSS scroll-snap?
 * – CSS `proximity` snap fires while VisionStatement's sticky panel is
 *   still pinned, pulling MissionStatement into view simultaneously and
 *   creating the "no-man's-land" overlap the user reported.
 * – A JS snap only fires once scrolling has fully stopped (via the native
 *   `scrollend` event, with a 200 ms debounce as a fallback), so it never
 *   interrupts an in-progress ScrollHijack sequence.
 * – A tight 20 % viewport threshold prevents over-eager snapping while
 *   still eliminating the half-between-sections dead-zone.
 */
export function ScrollSnapPage({ children }: { children: ReactNode }) {
  useEffect(() => {
    const NAV_H = 64; // matches h-16 navbar height

    const snapToNearest = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap]"),
      );
      if (!sections.length) return;

      const threshold = window.innerHeight * 0.2; // 20 % of vh ≈ 160 px

      let closest: { scrollTarget: number; dist: number } | null = null;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        // diff > 0  → section top is below the nav line (not yet reached)
        // diff < 0  → section top is above the nav line (partially passed)
        const diff = rect.top - NAV_H;
        const dist = Math.abs(diff);

        if (dist < threshold && (!closest || dist < closest.dist)) {
          closest = { scrollTarget: window.scrollY + diff, dist };
        }
      }

      // Skip if already well-aligned (< 4 px off) to avoid jitter
      if (closest && closest.dist > 4) {
        window.scrollTo({
          top: Math.max(0, closest.scrollTarget),
          behavior: "smooth",
        });
      }
    };

    // `scrollend` fires once inertia/momentum has fully stopped.
    // Supported in Chrome 114+, Firefox 109+, Safari 16.4+.
    window.addEventListener("scrollend", snapToNearest);

    // Debounce fallback for older browsers
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(snapToNearest, 200);
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
