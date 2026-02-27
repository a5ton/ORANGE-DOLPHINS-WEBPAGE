"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export function OrderStepsSection() {
  const t = useTranslations("offer.steps");
  const steps = t.raw("items") as Array<{
    number: string;
    title: string;
    description: string;
  }>;
  const gridRef = useRef<HTMLDivElement>(null);

  /* ── Staggered entrance animation ── */
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));

    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(30px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((c, i) => {
          setTimeout(() => {
            c.style.transition =
              "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)";
            c.style.opacity = "1";
            c.style.transform = "translateY(0)";
          }, i * 120);
        });
        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-darkGreen rounded-3xl overflow-hidden">

      {/* Section header */}
      <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-12">
        <div>
          <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6 block">
            {t("title")}
          </span>
          <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl leading-[0.93] tracking-tight">
            {t("subtitle")}
          </h2>
          <div className="mt-6 w-12 h-px bg-orange-500" />
        </div>
      </div>

      {/* 2×2 grid of steps */}
      <div ref={gridRef} className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              data-card
              className="relative p-10 overflow-hidden bg-darkGreen"
            >
              {/* Ghost number — bottom-right corner */}
              <span
                className="absolute right-4 bottom-2 font-display font-extrabold text-white/[0.08] leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(5rem, 11vw, 8rem)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative">
                <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5 block">
                  {t("stepLabel")} {i + 1}
                </span>
                <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl leading-[0.93] tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-white/70 text-base font-sans leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
