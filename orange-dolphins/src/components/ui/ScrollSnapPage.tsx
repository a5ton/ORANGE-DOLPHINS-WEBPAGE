"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Section-centring scroll assist with direction-aware snapping.
 *
 * Key behaviours
 * ──────────────
 * 1. DIRECTION GUARD
 *    Tracks whether the user last scrolled up or down. Sections that have
 *    drifted more than MIN_DRIFT (15 % of vh) in the SAME direction as the
 *    user's scroll are skipped, so we never fight the user's intent.
 *
 *    • Scrolled UP  → skip sections whose diff >  MIN_DRIFT (below centre,
 *                     would need scrolling DOWN to re-centre — wrong way).
 *    • Scrolled DOWN → skip sections whose diff < -MIN_DRIFT (above centre,
 *                     would need scrolling UP to re-centre — wrong way).
 *    Small drifts (< MIN_DRIFT) always trigger a re-centre correction regardless
 *    of direction (the user barely moved; snapping them back feels natural).
 *
 * 2. SCROLLHIJACK GUARD
 *    Once the user is more than 2 × NAV_H into a tall section (the 400 vh
 *    VisionStatement track), that section is excluded from candidates.
 *    Without this the snap fired back to slide 1 while reading slides 2–4.
 *
 * 3. CENTRING
 *    padding = (available height below navbar − section height) / 2, giving
 *    equal blank space above and below every section that fits on screen.
 *    Sections taller than the available height are top-aligned to the navbar.
 *
 * 4. CUSTOM RAF ANIMATION
 *    520 ms easeInOutQuart curve — fast start, soft landing.
 *    CSS scroll-behavior is temporarily set to "auto" during the animation
 *    to prevent the browser's own smooth layer competing with ours.
 */
export function ScrollSnapPage({ children }: { children: ReactNode }) {
  useEffect(() => {
    const NAV_H = 64; // px — matches h-16 navbar

    let isSnapping = false;
    let rafRef: number | null = null;
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    // Track scroll direction so we never snap against the user's intent
    let scrollDirection: "up" | "down" = "down";
    let lastScrollY = window.scrollY;

    // ── Easing ─────────────────────────────────────────────────────────────
    const ease = (t: number) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    // ── Custom smooth scroll ───────────────────────────────────────────────
    const doSnap = (targetY: number) => {
      if (rafRef) cancelAnimationFrame(rafRef);

      const clamped = Math.max(0, targetY);
      const startY = window.scrollY;
      const delta = clamped - startY;
      if (Math.abs(delta) < 6) { isSnapping = false; return; }

      document.documentElement.style.scrollBehavior = "auto";
      isSnapping = true;

      const DURATION = 520;
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

    const cancelSnap = () => {
      if (rafRef) { cancelAnimationFrame(rafRef); rafRef = null; }
      isSnapping = false;
      document.documentElement.style.scrollBehavior = "";
    };

    // ── Core snap logic ────────────────────────────────────────────────────
    const findAndSnap = () => {
      if (isSnapping) return;

      const vh = window.innerHeight;
      if (!vh) return;

      const availH = vh - NAV_H;
      // Small corrections (< 15 % vh) always snap back regardless of direction.
      // Larger drifts only snap in the matching direction so we never fight the user.
      const MIN_DRIFT = vh * 0.15;

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-snap]"),
      );
      if (!sections.length) return;

      let best: { target: number; dist: number } | null = null;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        const tall = rect.height > availH;

        // ScrollHijack guard: once inside a tall section don't snap back to its start
        if (tall && rect.top < -(NAV_H * 2)) continue;

        // Centring target below the navbar
        const padding = tall ? 0 : Math.max(0, availH - rect.height) / 2;
        const diff = rect.top - NAV_H - padding;
        const dist = Math.abs(diff);

        // Direction guard — skip sections that would be snapped against user intent
        // (only applies when the drift is large enough to be intentional)
        if (scrollDirection === "up"   && diff >  MIN_DRIFT) continue;
        if (scrollDirection === "down" && diff < -MIN_DRIFT) continue;

        if (dist < vh && (!best || dist < best.dist)) {
          best = { target: window.scrollY + diff, dist };
        }
      }

      if (best && best.dist > 6) doSnap(best.target);
    };

    // ── Event wiring ───────────────────────────────────────────────────────
    window.addEventListener("scrollend", findAndSnap);

    const onScroll = () => {
      if (isSnapping) return;

      // Update direction on every real scroll event
      const y = window.scrollY;
      if (y !== lastScrollY) {
        scrollDirection = y > lastScrollY ? "down" : "up";
        lastScrollY = y;
      }

      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(findAndSnap, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cancel animation immediately if user starts a new gesture
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
