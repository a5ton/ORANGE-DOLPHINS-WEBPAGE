import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          {/* Left: heading */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-6">
              Ready to Order?
            </p>
            <h2
              className="font-display font-black italic text-white leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t("title")}
            </h2>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/our-offer"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-8 py-4 transition-colors"
            >
              {t("button")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-neutral-700 hover:border-neutral-400 text-white text-sm font-semibold px-8 py-4 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
