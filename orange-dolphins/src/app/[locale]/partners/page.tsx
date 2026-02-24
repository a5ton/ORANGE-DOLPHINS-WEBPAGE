import { useTranslations } from "next-intl";
import { PartnerGrid } from "@/components/partners/PartnerGrid";
import { CtaSection } from "@/components/home/CtaSection";
import { FadeReveal } from "@/components/ui/FadeReveal";

function PartnersHero() {
  const t = useTranslations("partners.hero");
  return (
    <section className="border-b border-gray-100 pt-20 pb-16">
      <FadeReveal className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6">
          Our Partners
        </p>
        <h1
          className="font-display font-extrabold text-gray-900 leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
        >
          {t("title")}
        </h1>
        <p className="mt-6 text-gray-500 text-xl max-w-xl font-sans font-normal">
          {t("subtitle")}
        </p>
      </FadeReveal>
    </section>
  );
}

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnerGrid />
      <CtaSection />
    </>
  );
}
