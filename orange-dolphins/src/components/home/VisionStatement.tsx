"use client";

import { useTranslations } from "next-intl";
import { ScrollHijack } from "@/components/ui/ScrollHijack";

const PILLARS = [
  {
    label: "Boat-first",
    headline: ["We come", "to you."],
    body: "Wherever you're anchored in Leros — drop the dinghy, we'll do the rest.",
  },
  {
    label: "Fresh & local",
    headline: ["Island-fresh.", "Every time."],
    body: "Sourced daily from Leros producers — farmers, bakers, fishmongers.",
  },
  {
    label: "Two slots daily",
    headline: ["Morning", "or evening."],
    body: "9:00–11:00 or 17:00–19:00. Pick what fits your sailing day.",
  },
];

export function VisionStatement() {
  const t = useTranslations("home.vision");

  const slides = [
    /* ── Opening slide ── */
    <div key="open" className="text-center px-6 max-w-4xl">
      <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-8 block">
        Our Vision
      </span>
      <h2 className="font-display font-extrabold text-gray-900 text-5xl sm:text-7xl md:text-8xl leading-[0.93] tracking-tight">
        {t("title")}
      </h2>
      <div className="mt-10 w-12 h-px bg-orange-500 mx-auto" />
      <p className="mt-8 text-gray-500 text-lg sm:text-xl font-sans font-normal max-w-lg mx-auto leading-relaxed">
        {t("body")}
      </p>
    </div>,

    /* ── One slide per pillar ── */
    ...PILLARS.map((p) => (
      <div key={p.label} className="text-center px-6 max-w-3xl">
        <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-8 block">
          {p.label}
        </span>
        <h3 className="font-display font-extrabold text-gray-900 text-5xl sm:text-7xl md:text-8xl leading-[0.93] tracking-tight">
          {p.headline[0]}
          <br />
          {p.headline[1]}
        </h3>
        <div className="mt-10 w-12 h-px bg-orange-500 mx-auto" />
        <p className="mt-8 text-gray-500 text-xl font-sans font-normal">{p.body}</p>
      </div>
    )),
  ];

  return (
    <section className="bg-grey-100">
      <ScrollHijack slides={slides} speedPerSlide={100} />
    </section>
  );
}
