"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Section-centring scroll assist with direction-aware snapping.
 *
 * Key behaviours
 * ──────────────
 * 1. DEAD ZONE
 *    Drifts smaller than MIN_DRIFT (15 % of vh, ~135 px on a 900 px screen)
 *    are left completely alone — no snap-back, no correction. The user
 *    barely moved; pulling them back would feel like the page fighting them.
 *    This is the model used by Apple, Linear, and fullPage.js.
 *
 * 2. DIRECTION GUARD
 *    For drifts ≥ MIN_DRIFT the guard kicks in: sections that drifted in the
 *    same direction as the scroll are skipped so we never snap against the
 *    user's intent. The result is always a forward advance to the adjacent
 *    section, never a snap-back to the current one.
 *
 *    • Scrolled UP  → skip sections whose diff >  MIN_DRIFT (below centre).
 *    • Scrolled DOWN → skip sections whose diff < -MIN_DRIFT (above centre).
 *
 * 3. VELOCITY FAST-ADVANCE
 *    Wheel events are monitored while the user is scrolling.  If the peak
 *    accumulated delta within any 150 ms window exceeds VELOCITY_THRESHOLD
 *    (a clear "flick" gesture), the debounce is cut from 150 ms → 50 ms so
 *    the advance feels instant.  This prevents fast-flick gestures on a
 *    trackpad from "stalling" inside the dead zone.
 *
 * 4. SCROLLHIJACK GUARD
 *    Once the user is more than 2 × NAV_H into a tall section (the 400 vh
 *    VisionStatement track), that section is excluded from candidates.
 *    Without this the snap fired back to slide 1 while reading slides 2–4.
 *
 * 5. CENTRING
 *    padding = (available height below navbar − section height) / 2, giving
 *    equal blank space above and below every section that fits on screen.
 *    Sections taller than the available height are top-aligned to the navbar.
 *
 * 6. CUSTOM RAF ANIMATION
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

    // ── Velocity tracking (wheel events) ──────────────────────────────────
    // Accumulate wheel delta over a rolling 150 ms window to detect "flick"
    // gestures that should advance the section without waiting for the full
    // 150 ms debounce.
    const VELOCITY_THRESHOLD = 300; // accumulated deltaY (px) in 150 ms = flick
    let wheelAccum = 0;
    let wheelAccumTimer: ReturnType<typeof setTimeout> | null = null;

    const onWheel = (e: WheelEvent) => {
      // Cancel any in-progress snap animation on new gesture
      if (isSnapping) {
        if (rafRef) { cancelAnimationFrame(rafRef); rafRef = null; }
        isSnapping = false;
        document.documentElement.style.scrollBehavior = "";
      }

      wheelAccum += e.deltaY;

      // Reset accumulator after 150 ms of no wheel events
      if (wheelAccumTimer) clearTimeout(wheelAccumTimer);
      wheelAccumTimer = setTimeout(() => { wheelAccum = 0; }, 150);

      // Fast flick detected — shorten the debounce so the snap fires quickly
      if (Math.abs(wheelAccum) >= VELOCITY_THRESHOLD) {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(findAndSnap, 50);
      }
    };

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
    function findAndSnap() {
      if (isSnapping) return;

      const vh = window.innerHeight;
      if (!vh) return;

      const availH = vh - NAV_H;

      // MIN_DRIFT doubles as both the dead-zone floor AND the direction-guard
      // threshold.  Drifts below it are ignored entirely; drifts at or above
      // it trigger the direction guard which skips the current section, so
      // the snap always advances forward — never yanks back.
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
        if (scrollDirection === "up"   && diff >  MIN_DRIFT) continue;
        if (scrollDirection === "down" && diff < -MIN_DRIFT) continue;

        if (dist < vh && (!best || dist < best.dist)) {
          best = { target: window.scrollY + diff, dist };
        }
      }

      // Dead zone: only fire if the drift is at least MIN_DRIFT.
      // Tiny scrolls (< MIN_DRIFT) fall inside the dead zone and are left
      // alone — no snap-back, no fighting the user.
      // For drifts ≥ MIN_DRIFT the direction guard already excluded the
      // current section, so best points at the adjacent section (advance).
      if (best && best.dist >= MIN_DRIFT) doSnap(best.target);
    }

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

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", cancelSnap, { passive: true });

    return () => {
      cancelSnap();
      window.removeEventListener("scrollend", findAndSnap);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", cancelSnap);
      if (debounceTimer) clearTimeout(debounceTimer);
      if (wheelAccumTimer) clearTimeout(wheelAccumTimer);
    };
  }, []);

  return <>{children}</>;
}
