import { useTranslations } from "next-intl";
import { OrderStepsSection } from "@/components/offer/OrderStepsSection";
import { DeliveryDescription } from "@/components/offer/DeliveryDescription";
import { ProductCategoriesGrid } from "@/components/offer/ProductCategoriesGrid";
import { DeliveryMapSection } from "@/components/offer/DeliveryMapSection";
import { CtaSection } from "@/components/home/CtaSection";

function OfferHero() {
  const t = useTranslations("offer.hero");
  return (
    <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-24 text-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-4">
          {t("title")}
        </h1>
        <p className="text-ocean-100 text-xl">{t("subtitle")}</p>
      </div>
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
