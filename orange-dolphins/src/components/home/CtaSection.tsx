import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="bg-orange-500 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4">
          {t("title")}
        </h2>
        <p className="text-orange-100 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <Link
          href="/our-offer"
          className="inline-flex items-center justify-center rounded-full bg-white hover:bg-orange-50 text-orange-500 font-bold tracking-wide text-base px-10 py-4 transition-all duration-200 shadow-xl hover:shadow-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
