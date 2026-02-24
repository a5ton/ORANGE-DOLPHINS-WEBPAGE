"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

// Falls back to useEffect on the server to avoid SSR warnings
const useClientLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Wraps page content and fades it in on every client-side navigation.
 * useLayoutEffect fires synchronously after React updates the DOM but before
 * the browser paints, so we can set opacity: 0 before the user sees new
 * content. useEffect then restores it with a transition.
 */
export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);

  useClientLayoutEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const el = ref.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.opacity = "0";
  }, [pathname]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const frame = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.22s ease";
      el.style.opacity = "1";
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div ref={ref} style={{ opacity: 1 }}>
      {children}
    </div>
  );
}
