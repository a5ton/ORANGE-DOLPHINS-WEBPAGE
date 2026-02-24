import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-boat.jpg"
        alt="Aerial view of a motor yacht on deep blue Aegean water"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay — heavy at bottom, light at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

      {/* Content — pinned to bottom-left like CHCKN */}
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-16 lg:pb-20">
        {/* Eyebrow */}
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6">
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
            className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-display font-bold tracking-[0.18em] uppercase text-[0.7rem] sm:text-[0.8rem] px-8 sm:px-9 py-3.5 sm:py-4 transition-colors"
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
