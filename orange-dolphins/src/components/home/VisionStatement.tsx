"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

// Replace with real per-pillar images when available
const PILLAR_IMAGES = [
  "/d178707d58e38b0d90bb9026956246fd.jpg",
  "/d178707d58e38b0d90bb9026956246fd.jpg",
  "/d178707d58e38b0d90bb9026956246fd.jpg",
];

export function VisionStatement() {
  const t = useTranslations("home.vision");
  const pillars = t.raw("pillars") as Array<{
    label: string;
    headline1: string;
    headline2: string;
    body: string;
  }>;

  return (
    <section className="bg-white pt-14 md:pt-20 pb-10 md:pb-14 rounded-3xl overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top — full-width stacked */}
        <div className="mb-10 md:mb-12">
          <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5 block">
            {t("title")}
          </span>
          <h2
            className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 5vw, 5.5rem)" }}
          >
            {t("headline")}
          </h2>
          <div className="mt-6 w-12 h-px bg-orange-500" />
          <p className="mt-5 text-darkGreen/60 text-base sm:text-lg font-sans font-normal leading-relaxed max-w-xl">
            {t("body")}
          </p>
        </div>

        {/* 3 pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((p, i) => (
            <div key={p.label} className="rounded-2xl overflow-hidden border border-gray-100">

              {/* Image */}
              <div className="relative aspect-video w-full">
                <Image
                  src={PILLAR_IMAGES[i]}
                  fill
                  className="object-cover object-center"
                  alt={`${p.headline1} ${p.headline2}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <span className="text-[10px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-3 block">
                  {p.label}
                </span>
                <h3
                  className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight mb-3"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.75rem)" }}
                >
                  {p.headline1} {p.headline2}
                </h3>
                <p className="text-darkGreen/55 font-sans text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
