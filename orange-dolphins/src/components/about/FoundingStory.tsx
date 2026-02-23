import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlobeAltIcon, AnchorIcon, MapIcon } from "@/components/ui/icons";

export function FoundingStory() {
  const t = useTranslations("about.founding");

  return (
    <SectionWrapper className="bg-ocean-900">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6 text-ocean-300">
          <GlobeAltIcon className="h-14 w-14" />
        </div>
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-6">
          {t("title")}
        </h2>
        <div className="text-ocean-100 text-lg leading-relaxed space-y-4 mb-10">
          {t("description")
            .split("\n\n")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
            <AnchorIcon className="h-6 w-6 text-white shrink-0" />
            <div className="text-left">
              <p className="text-white font-semibold text-sm">{t("leros")}</p>
              <p className="text-ocean-200 text-xs">Since 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-orange-500/20 border border-orange-500/30 rounded-2xl px-6 py-4">
            <MapIcon className="h-6 w-6 text-orange-300 shrink-0" />
            <div className="text-left">
              <p className="text-orange-300 font-semibold text-sm">{t("expansion")}</p>
              <p className="text-ocean-200 text-xs">Vision 2027</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
