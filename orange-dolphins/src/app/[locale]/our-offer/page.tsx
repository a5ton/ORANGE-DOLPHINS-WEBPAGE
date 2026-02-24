import { useTranslations } from "next-intl";
import { OrderStepsSection } from "@/components/offer/OrderStepsSection";
import { DeliveryDescription } from "@/components/offer/DeliveryDescription";
import { ProductCategoriesGrid } from "@/components/offer/ProductCategoriesGrid";
import { DeliveryMapSection } from "@/components/offer/DeliveryMapSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FadeReveal } from "@/components/ui/FadeReveal";

function OfferHero() {
  const t = useTranslations("offer.hero");
  return (
    <section className="border-b border-gray-100 pt-20 pb-16">
      <FadeReveal className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6">
          What We Offer
        </p>
        <h1
          className="font-display font-extrabold text-gray-900 leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
        >
          {t("title")}
        </h1>
        <p className="mt-6 text-xl max-w-xl font-display font-semibold text-blue-500">
          {t("subtitle")}
        </p>
      </FadeReveal>
    </section>
  );
}

export default function OurOfferPage() {
  return (
    <>
      <OfferHero />
      <OrderStepsSection />
      <DeliveryDescription />
      <ProductCategoriesGrid />
      <DeliveryMapSection />
      <CtaSection />
    </>
  );
}
