import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="min-h-screen flex flex-col bg-white">
      {/* Main editorial block */}
      <div className="flex-1 flex flex-col justify-center mx-auto max-w-7xl w-full px-6 py-20 lg:py-24">
        {/* Eyebrow */}
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-10">
          Leros · Dodecanese · Est.&nbsp;2024
        </p>

        {/* Headline */}
        <h1
          className="font-display font-extrabold text-gray-900 leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: "clamp(3.5rem, 8.5vw, 9rem)" }}
        >
          Fresh, Local,
          <br />
          Delivered
          <br />
          <span className="text-orange-500">with Care.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl font-display font-semibold text-blue-500 max-w-md mb-12 leading-snug">
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
            className="inline-flex items-center justify-center font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-gray-500 hover:text-orange-500 px-4 sm:px-5 py-2 rounded-full hover:bg-orange-500/5 transition-colors"
          >
            Our Story →
          </Link>
        </div>
      </div>

    </section>
  );
}
