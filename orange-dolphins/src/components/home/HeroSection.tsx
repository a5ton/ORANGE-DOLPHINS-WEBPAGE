import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DolphinIcon, SunIcon, MoonIcon, AnchorIcon } from "@/components/ui/icons";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-ocean-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-700 to-ocean-900" />
      {/* Wave overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-orange-500/30 to-transparent" />
      </div>
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-ocean-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium px-4 py-1.5 mb-8">
          <DolphinIcon className="h-4 w-4" /> Leros, Dodecanese · Est. 2024
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
          {t("headline")}
        </h1>

        {/* Subheadline */}
        <p className="text-ocean-100 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto">
          {t("subheadline")}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/our-offer"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold tracking-wide text-base px-8 py-4 transition-all duration-200 shadow-xl hover:shadow-orange-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-900"
          >
            {t("cta")}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 font-semibold text-base px-8 py-4 transition-all duration-200"
          >
            Learn Our Story
          </Link>
        </div>

        {/* Delivery times hint */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-ocean-200">
          <span className="flex items-center gap-2">
            <SunIcon className="h-4 w-4" /> Morning delivery: 9:00–11:00
          </span>
          <span className="text-ocean-600 hidden sm:block">|</span>
          <span className="flex items-center gap-2">
            <MoonIcon className="h-4 w-4" /> Evening delivery: 17:00–19:00
          </span>
          <span className="text-ocean-600 hidden sm:block">|</span>
          <span className="flex items-center gap-2">
            <AnchorIcon className="h-4 w-4" /> Even at anchor
          </span>
        </div>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40L60 35C120 30 240 20 360 25C480 30 600 50 720 55C840 60 960 50 1080 40C1200 30 1320 20 1380 15L1440 10V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
