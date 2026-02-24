"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollHijack } from "@/components/ui/ScrollHijack";

export function HowItWorksTeaser() {
  const t = useTranslations("home.howItWorks");
  const steps = t.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  const slides = [
    /* ── Intro slide ── */
    <div key="intro" className="text-center px-6 max-w-3xl">
      <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-400 mb-8 block">
        How It Works
      </span>
      <h2 className="font-display font-extrabold text-white text-5xl sm:text-7xl md:text-8xl leading-[0.93] tracking-tight">
        {t("title")}
      </h2>
      <div className="mt-10 w-12 h-px bg-orange-500 mx-auto" />
      <p className="mt-8 text-blue-200 text-xl font-sans font-normal max-w-sm mx-auto leading-relaxed">
        {t("subtitle")}
      </p>
    </div>,

    /* ── One slide per step ── */
    ...steps.map((step, i) => (
      <div key={step.number} className="text-center px-6 max-w-2xl relative">
        {/* Ghost number — decorative backdrop */}
        <span
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-display font-extrabold text-white/[0.05] select-none pointer-events-none leading-none"
          style={{ fontSize: "32vw" }}
          aria-hidden="true"
        >
          {step.number}
        </span>
        <span className="relative text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-400 mb-6 block">
          Step {i + 1} of {steps.length}
        </span>
        <h3 className="relative font-display font-extrabold text-white text-4xl sm:text-6xl md:text-7xl leading-[0.93] tracking-tight mb-8">
          {step.title}
        </h3>
        <p className="relative text-blue-200 text-xl font-sans font-normal leading-relaxed">
          {step.description}
        </p>
      </div>
    )),

    /* ── CTA slide ── */
    <div key="cta" className="text-center px-6 max-w-2xl">
      <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-400 mb-8 block">
        Ready?
      </span>
      <h3 className="font-display font-extrabold text-white text-4xl sm:text-6xl leading-[0.93] tracking-tight mb-10">
        Ready to order?
      </h3>
      <Link
        href="/our-offer"
        className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-[0.7rem] sm:text-[0.8rem] tracking-[0.18em] uppercase px-9 sm:px-10 py-3.5 sm:py-4 transition-colors"
      >
        {t("learnMore")} →
      </Link>
    </div>,
  ];

  return (
    <section className="bg-blue-500">
      <ScrollHijack slides={slides} speedPerSlide={100} />
    </section>
  );
}
