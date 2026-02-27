"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const sectionRef = useRef<HTMLElement>(null);
  const darkOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const overlay = darkOverlayRef.current;
    if (!el || !overlay) return;

    const onScroll = () => {
      const y = window.scrollY;
      // Animate over the first 500px of scroll
      const progress = Math.min(Math.max(y / 500, 0), 1);

      // Height shrinks from 100vh → 65vh
      el.style.height = `${100 - progress * 35}vh`;

      // Image darkens from transparent → black/50
      overlay.style.opacity = String(progress * 0.55);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{ willChange: "height" }}
    >
      {/* Background image */}
      <Image
        src="/hero-section.jpg"
        alt="Sailboat on the Mediterranean sea at sunset"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay — heavy at bottom, light at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

      {/* Scroll-driven darkening overlay */}
      <div
        ref={darkOverlayRef}
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Content — pinned to bottom-left like CHCKN */}
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-16 lg:pb-20">
        {/* Eyebrow */}
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-white/75 mb-6">
          Leros · Dodecanese · Est.&nbsp;2024
        </p>

        {/* Headline */}
        <h1
          className="font-display font-extrabold text-white leading-[0.9] tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
        >
          {t("headlineLine1")}
          <br />
          {t("headlineLine2")}
          <br />
          <span className="text-orange-500">{t("headlineAccent")}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/75 text-lg sm:text-xl font-display font-semibold max-w-md mb-10 leading-snug">
          {t("subheadline")}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/our-offer"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white font-display font-bold tracking-[0.18em] uppercase text-[0.7rem] sm:text-[0.8rem] px-8 sm:px-9 py-3.5 sm:py-4 transition-colors"
          >
            {t("cta")}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-white/70 hover:text-white px-4 sm:px-5 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {t("ourStory")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
