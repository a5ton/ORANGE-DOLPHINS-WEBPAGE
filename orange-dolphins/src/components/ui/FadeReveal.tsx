"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeRevealProps {
  children: ReactNode;
  /** Stagger delay in ms — use for sibling elements */
  delay?: number;
  className?: string;
}

/**
 * Wraps children in an IntersectionObserver-driven entrance animation.
 * The element fades up from translateY(32px) when it enters the viewport.
 * Uses direct DOM writes (no state) for zero-overhead animation.
 */
export function FadeReveal({ children, delay = 0, className }: FadeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
    };

    // If user prefers reduced motion, reveal immediately with no animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(show, delay);
          } else {
            show();
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition:
          "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: delay > 0 ? "0ms" : "0ms", // delay handled in JS for accuracy
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
