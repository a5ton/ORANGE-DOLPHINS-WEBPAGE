"use client";

import { useTranslations } from "next-intl";

export function VisionStatement() {
  const t = useTranslations("home.vision");
  const pillars = t.raw("pillars") as Array<{
    label: string;
    headline1: string;
    headline2: string;
    body: string;
  }>;

  return (
    <section className="bg-blue-500 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">

        {/* Two-column layout on large screens */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-24">

          {/* Left col — label + headline, sticky on desktop */}
          <div className="lg:w-5/12 mb-14 lg:mb-0 lg:sticky lg:top-28 self-start">
            <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-300 mb-8 block">
              {t("title")}
            </span>
            <h2
              className="font-display font-extrabold text-white leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 5vw, 5.5rem)" }}
            >
              {t("headline")}
            </h2>
            <div className="mt-10 w-12 h-px bg-orange-300" />
            <p className="mt-8 text-white/70 text-base sm:text-lg font-sans font-normal leading-relaxed">
              {t("body")}
            </p>
          </div>

          {/* Right col — 3 pillars stacked */}
          <div className="lg:w-7/12 flex flex-col divide-y divide-white/15">
            {pillars.map((p, i) => (
              <div key={p.label} className={`py-10 ${i === 0 ? "pt-0 lg:pt-10" : ""}`}>
                <span className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-300 mb-4 block">
                  {p.label}
                </span>
                <h3
                  className="font-display font-extrabold text-white leading-[0.93] tracking-tight mb-4"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
                >
                  {p.headline1} {p.headline2}
                </h3>
                <p className="text-white/65 font-sans text-base leading-relaxed max-w-sm">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
