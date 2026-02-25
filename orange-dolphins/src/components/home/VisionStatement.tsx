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

  // Brand colour themes per slide: [bg, accent, heading, body, divider]
  const themes = [
    { bg: "bg-blue-500",   accent: "text-orange-300",  heading: "text-white",         body: "text-white/80",     divider: "bg-orange-300" },
    { bg: "bg-darkGreen",  accent: "text-orange-300",  heading: "text-white",         body: "text-white/70",     divider: "bg-orange-300" },
    { bg: "bg-orange-500", accent: "text-white/60",    heading: "text-white",         body: "text-white/80",     divider: "bg-white/60"   },
    { bg: "bg-blue-500",   accent: "text-orange-300",  heading: "text-white",         body: "text-white/80",     divider: "bg-orange-300" },
  ];

  const slides = [
    /* ── Opening slide ── */
    <div key="open" className={`w-full h-full flex flex-col items-center justify-center ${themes[0].bg}`}>
      <div className="text-center px-6 max-w-4xl">
        <span className={`text-xs font-display font-bold tracking-[0.2em] uppercase ${themes[0].accent} mb-8 block`}>
          {t("title")}
        </span>
        <h2 className={`font-display font-extrabold ${themes[0].heading} text-5xl sm:text-7xl md:text-8xl leading-[0.93] tracking-tight`}>
          {t("title")}
        </h2>
        <div className={`mt-10 w-12 h-px ${themes[0].divider} mx-auto`} />
        <p className={`mt-8 ${themes[0].body} text-lg sm:text-xl font-sans font-normal max-w-lg mx-auto leading-relaxed`}>
          {t("body")}
        </p>
      </div>
    </div>,

    /* ── One slide per pillar ── */
    ...pillars.map((p, i) => {
      const theme = themes[i + 1] ?? themes[0];
      return (
        <div key={p.label} className={`w-full h-full flex flex-col items-center justify-center ${theme.bg}`}>
          <div className="text-center px-6 max-w-3xl">
            <span className={`text-xs font-display font-bold tracking-[0.2em] uppercase ${theme.accent} mb-8 block`}>
              {p.label}
            </span>
            <h3 className={`font-display font-extrabold ${theme.heading} text-5xl sm:text-7xl md:text-8xl leading-[0.93] tracking-tight`}>
              {p.headline1}
              <br />
              {p.headline2}
            </h3>
            <div className={`mt-10 w-12 h-px ${theme.divider} mx-auto`} />
            <p className={`mt-8 ${theme.body} text-xl font-sans font-normal`}>{p.body}</p>
          </div>
        </div>
      );
    }),
  ];

  return (
    <section>
      <ScrollHijack slides={slides} speedPerSlide={100} />
    </section>
  );
}
