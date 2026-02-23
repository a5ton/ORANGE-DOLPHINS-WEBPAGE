import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FadeReveal } from "@/components/ui/FadeReveal";

export function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="bg-ocean-900 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-orange-500/10 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-ocean-700/50 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <FadeReveal className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-orange-400 mb-6 block">
          Ready to Order?
        </span>
        <h2 className="font-display font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
          {t("title")}
        </h2>
        <p className="text-ocean-200 text-lg md:text-xl mb-12 max-w-md mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/our-offer"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-10 py-4 transition-colors shadow-xl shadow-orange-500/20"
          >
            {t("button")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-10 py-4 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </FadeReveal>
    </section>
  );
}
