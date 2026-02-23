import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { DolphinIcon, CheckCircleIcon } from "@/components/ui/icons";

export function DeliveryDescription() {
  const t = useTranslations("offer.delivery");

  return (
    <SectionWrapper className="bg-ocean-900">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6 text-ocean-300">
          <DolphinIcon className="h-16 w-16" />
        </div>
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-6">
          {t("title")}
        </h2>
        <p className="text-ocean-100 text-lg md:text-xl leading-relaxed">
          {t("description")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Fresh products", "Even at anchor", "Quality checked", "Friendly service"].map(
            (badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-1.5"
              >
                <CheckCircleIcon className="h-4 w-4 text-orange-300 shrink-0" /> {badge}
              </span>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
