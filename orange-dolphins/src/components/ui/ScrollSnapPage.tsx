"use client";

import { useEffect, type ReactNode } from "react";

/**
 * After the user stops scrolling, snaps the nearest [data-snap] section
 * so it is CENTRED on screen.
 *
 * Centering rule:
 *   • Section fits inside the viewport (height ≤ vh) → scroll so
 *     the section's vertical midpoint aligns with the viewport's midpoint.
 *   • Section is taller than the viewport (e.g. the 400 vh ScrollHijack) →
 *     fall back to pinning its top flush below the navbar, because centering
 *     a 400 vh block would jump 200 vh into the middle of the slide sequence.
 *
 * Threshold = 100 % viewport height — covers the full no-man's-land gap
 * between VisionStatement's sticky release point and MissionStatement.
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

      const vh = window.innerHeight;
      const threshold = vh; // 100 % viewport

      let closest: { scrollTarget: number; dist: number } | null = null;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();

        // Choose snap anchor:
        //   short/medium section → centre on screen
        //   taller-than-viewport section → pin top below navbar
        const diff =
          rect.height <= vh
            ? rect.top + rect.height / 2 - vh / 2   // centre ↔ centre
            : rect.top - NAV_H;                       // top → just below nav

        const dist = Math.abs(diff);
        if (dist < threshold && (!closest || dist < closest.dist)) {
          closest = { scrollTarget: window.scrollY + diff, dist };
        }
      }

      // Skip if already well-aligned (< 6 px off)
      if (closest && closest.dist > 6) {
        isSnapping = true;
        window.scrollTo({
          top: Math.max(0, closest.scrollTarget),
          behavior: "smooth",
        });
        setTimeout(() => {
          isSnapping = false;
        }, 800);
      }
    };

    // scrollend fires once momentum has fully stopped (Chrome 114+, FF 109+, Safari 16.4+)
    window.addEventListener("scrollend", snapToNearest);

    // 150 ms debounce fallback for older browsers
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (isSnapping) return;
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
