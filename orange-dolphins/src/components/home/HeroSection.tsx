import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SunIcon, MoonIcon, AnchorIcon } from "@/components/ui/icons";

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
        <p className="text-gray-600 text-lg sm:text-xl font-sans font-normal max-w-md mb-12 leading-relaxed">
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

      {/* Bottom delivery-info strip */}
      <div className="border-t border-grey-100 bg-grey-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500 font-sans">
          <span className="flex items-center gap-2">
            <SunIcon className="h-4 w-4 text-orange-500 shrink-0" />
            Morning&nbsp;·&nbsp;9:00–11:00
          </span>
          <span className="hidden sm:block text-grey-200">|</span>
          <span className="flex items-center gap-2">
            <MoonIcon className="h-4 w-4 shrink-0" />
            Evening&nbsp;·&nbsp;17:00–19:00
          </span>
          <span className="hidden sm:block text-grey-200">|</span>
          <span className="flex items-center gap-2">
            <AnchorIcon className="h-4 w-4 shrink-0" />
            Even at anchor
          </span>
        </div>
      </div>
    </section>
  );
}
