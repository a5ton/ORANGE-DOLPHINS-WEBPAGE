import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MapPinIcon, ArrowRightIcon } from "@/components/ui/icons";

export function DeliveryMapSection() {
  const t = useTranslations("offer.map");

  return (
    <SectionWrapper className="bg-white">
      <div className="max-w-4xl">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-4">
          Coverage
        </p>
        <h2
          className="font-display font-black italic text-gray-900 leading-[0.93] tracking-tight mb-10"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
        >
          {t("title")}
        </h2>
        <p className="text-gray-400 text-lg mb-12">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dodecanese placeholder */}
        <div className="aspect-video bg-cream-50 border border-gray-100 flex flex-col items-center justify-center gap-3">
          <MapPinIcon className="h-8 w-8 text-gray-200" />
          <p className="text-sm text-gray-400">Dodecanese Islands</p>
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-orange-500 border border-orange-200 px-3 py-1">
            Leros — Pilot Island
          </span>
        </div>

        {/* Leros zoom placeholder */}
        <div className="aspect-video bg-cream-50 border border-gray-100 flex flex-col items-center justify-center gap-3">
          <MapPinIcon className="h-8 w-8 text-gray-200" />
          <p className="text-sm text-gray-400">Leros — Delivery Bays</p>
          <p className="text-xs text-gray-300 text-center px-8">{t("mapNote")}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <MapPinIcon className="h-4 w-4 text-gray-400 shrink-0" />
          <span className="text-sm text-gray-600 font-medium">{t("pilot")}</span>
        </div>
        <div className="flex items-center gap-3">
          <ArrowRightIcon className="h-4 w-4 text-orange-500 shrink-0" />
          <span className="text-sm text-orange-600 font-medium">{t("expansion")}</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
