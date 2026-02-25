import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="bg-darkGreen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          {/* Left: heading */}
          <div>
            <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6">
              {t("label")}
            </p>
            <h2
              className="font-display font-extrabold text-white leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t("title")}
            </h2>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/our-offer"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-[0.7rem] sm:text-[0.8rem] tracking-[0.18em] uppercase px-9 sm:px-10 py-3.5 sm:py-4 transition-colors"
            >
              {t("button")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 hover:border-white text-white font-display font-bold text-[0.7rem] sm:text-[0.8rem] tracking-[0.18em] uppercase px-9 sm:px-10 py-3.5 sm:py-4 transition-colors"
            >
              {t("getInTouch")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
