import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MapIcon, MapPinIcon, AnchorIcon, ArrowRightIcon } from "@/components/ui/icons";

export function DeliveryMapSection() {
  const t = useTranslations("offer.map");

  return (
    <SectionWrapper className="bg-white">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-500 text-lg">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Dodecanese overview */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-ocean-100 to-ocean-200 aspect-video flex items-center justify-center border border-ocean-100">
          <div className="text-center p-8">
            <MapIcon className="h-16 w-16 text-ocean-500 mx-auto mb-4" />
            <h3 className="font-semibold text-ocean-800 text-lg mb-2">
              Dodecanese Islands
            </h3>
            <p className="text-ocean-600 text-sm">
              Map of the full Dodecanese archipelago
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1">
              <MapPinIcon className="h-3.5 w-3.5" /> Leros — Pilot Island
            </div>
          </div>
        </div>

        {/* Leros zoom */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-100 aspect-video flex items-center justify-center border border-ocean-100">
          <div className="text-center p-8">
            <AnchorIcon className="h-16 w-16 text-ocean-500 mx-auto mb-4" />
            <h3 className="font-semibold text-ocean-800 text-lg mb-2">
              Leros — Delivery Bays
            </h3>
            <p className="text-ocean-600 text-sm mb-4">
              Detailed map with available delivery locations
            </p>
            <p className="text-orange-500 text-xs font-medium">
              {t("mapNote")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3 bg-ocean-50 border border-ocean-100 rounded-2xl px-6 py-4">
          <MapPinIcon className="h-5 w-5 text-ocean-600 shrink-0" />
          <p className="font-semibold text-ocean-900">{t("pilot")}</p>
        </div>
        <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-2xl px-6 py-4">
          <ArrowRightIcon className="h-5 w-5 text-orange-500 shrink-0" />
          <p className="font-semibold text-orange-600">{t("expansion")}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
