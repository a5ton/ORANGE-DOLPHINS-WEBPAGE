"use client";

import { useTranslations } from "next-intl";
import { ScrollHijack } from "@/components/ui/ScrollHijack";

export function VisionStatement() {
  const t = useTranslations("home.vision");
  const pillars = t.raw("pillars") as Array<{
    label: string;
    headline1: string;
    headline2: string;
    body: string;
  }>;

  const slides = [
    /* ── Opening slide ── */
    <div key="open" className="text-center px-6 max-w-4xl">
      <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-8 block">
        {t("title")}
      </span>
      <h2 className="font-display font-extrabold text-darkGreen text-5xl sm:text-7xl md:text-8xl leading-[0.93] tracking-tight">
        {t("title")}
      </h2>
      <div className="mt-10 w-12 h-px bg-orange-500 mx-auto" />
      <p className="mt-8 text-darkGreen/70 text-lg sm:text-xl font-sans font-normal max-w-lg mx-auto leading-relaxed">
        {t("body")}
      </p>
    </div>,

    /* ── One slide per pillar ── */
    ...pillars.map((p) => (
      <div key={p.label} className="text-center px-6 max-w-3xl">
        <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-8 block">
          {p.label}
        </span>
        <h3 className="font-display font-extrabold text-darkGreen text-5xl sm:text-7xl md:text-8xl leading-[0.93] tracking-tight">
          {p.headline1}
          <br />
          {p.headline2}
        </h3>
        <div className="mt-10 w-12 h-px bg-orange-500 mx-auto" />
        <p className="mt-8 text-darkGreen/70 text-xl font-sans font-normal">{p.body}</p>
      </div>
    )),
  ];

  return (
    <section className="bg-grey-100">
      <ScrollHijack slides={slides} speedPerSlide={100} panelClassName="bg-grey-100" />
    </section>
  );
}
