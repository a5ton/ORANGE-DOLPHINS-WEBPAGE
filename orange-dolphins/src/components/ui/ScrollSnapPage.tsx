"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Section-centering scroll assist.
 *
 * When the user stops scrolling, the nearest [data-snap] section is
 * smoothly centred in the viewport using a custom RAF animation with an
 * easeInOutQuart curve — giving a premium, app-like feel rather than the
 * browser's generic CSS smooth scroll.
 *
 * Centering: section is centred in the space BELOW the navbar, so equal
 * blank space appears above and below it. Sections taller than the
 * available height are top-aligned to the navbar instead (they fill the
 * screen, so centering has no effect).
 *
 * VisionStatement (400 vh ScrollHijack) fix: once the user has scrolled
 * more than ~2 × NAV_H into a tall section, that section is excluded from
 * snap candidates. Without this, the snap fired back to slide 1 while the
 * user was reading slide 2 / 3 / 4.
 */
export function ScrollSnapPage({ children }: { children: ReactNode }) {
  useEffect(() => {
    const NAV_H = 64; // px — matches the h-16 navbar
    let isSnapping = false;
    let rafRef: number | null = null;
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    // ── Easing ────────────────────────────────────────────────────────────
    // easeInOutQuart: fast start, smooth deceleration into the resting point
    const ease = (t: number) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    // ── Custom smooth scroll ──────────────────────────────────────────────
    const doSnap = (targetY: number) => {
      if (rafRef) cancelAnimationFrame(rafRef);

      const clampedTarget = Math.max(0, targetY);
      const startY = window.scrollY;
      const delta = clampedTarget - startY;
      if (Math.abs(delta) < 6) { isSnapping = false; return; }

      // Temporarily override CSS scroll-behavior so it doesn't compete with
      // our RAF animation (it would add a second smooth layer on top).
      document.documentElement.style.scrollBehavior = "auto";
      isSnapping = true;

      const DURATION = 520; // ms — fast enough to feel snappy, smooth enough to feel quality
      const t0 = performance.now();

      const tick = (now: number) => {
        const p = Math.min((now - t0) / DURATION, 1);
        window.scrollTo(0, startY + delta * ease(p));

        if (p < 1) {
          rafRef = requestAnimationFrame(tick);
        } else {
          rafRef = null;
          isSnapping = false;
          document.documentElement.style.scrollBehavior = "";
        }
      };

      rafRef = requestAnimationFrame(tick);
    };

    // ── Cancel in-flight animation ────────────────────────────────────────
    const cancelSnap = () => {
      if (rafRef) { cancelAnimationFrame(rafRef); rafRef = null; }
      isSnapping = false;
      document.documentElement.style.scrollBehavior = "";
    };

    // ── Core snap logic ───────────────────────────────────────────────────
    const findAndSnap = () => {
      if (isSnapping) return;

      const vh = window.innerHeight;
      if (!vh) return;

      const availH = vh - NAV_H; // usable height below the navbar

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap]"),
      );
      if (!sections.length) return;

      let best: { target: number; dist: number } | null = null;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        const tall = rect.height > availH;

        // ── VisionStatement / ScrollHijack guard ──────────────────────────
        // If user has scrolled more than 2 × NAV_H past a tall section's
        // top, exclude it from snap candidates. Without this, the snap fires
        // back to slide 1 while the user is reading slides 2–4.
        if (tall && rect.top < -(NAV_H * 2)) continue;

        // ── Snap target: centre section below the navbar ──────────────────
        // padding = half the blank space that surrounds a short section.
        // For tall sections (fills or overflows the screen): padding = 0,
        // which is the same as top-aligning to the navbar.
        const padding = tall ? 0 : Math.max(0, availH - rect.height) / 2;
        const diff = rect.top - NAV_H - padding;
        const dist = Math.abs(diff);

        // Only consider sections within 1 full viewport height
        if (dist < vh && (!best || dist < best.dist)) {
          best = { target: window.scrollY + diff, dist };
        }
      }

      // Skip if already well-aligned (< 6 px) to avoid pointless micro-scrolls
      if (best && best.dist > 6) doSnap(best.target);
    };

    // ── Event wiring ──────────────────────────────────────────────────────

    // scrollend: fires once inertia/momentum has fully stopped.
    // Chrome 114+, Firefox 109+, Safari 16.4+.
    window.addEventListener("scrollend", findAndSnap);

    // Debounce fallback for browsers without scrollend support
    const onScroll = () => {
      if (isSnapping) return; // Our own RAF fires scroll events — ignore them
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(findAndSnap, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // If the user physically starts a new gesture mid-animation, cancel
    // immediately so their input takes priority.
    const onInteraction = () => { if (isSnapping) cancelSnap(); };
    window.addEventListener("wheel", onInteraction, { passive: true });
    window.addEventListener("touchstart", onInteraction, { passive: true });

    return () => {
      cancelSnap();
      window.removeEventListener("scrollend", findAndSnap);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  return <>{children}</>;
}
