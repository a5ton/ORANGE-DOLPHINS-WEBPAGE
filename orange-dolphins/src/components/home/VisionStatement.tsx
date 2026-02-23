import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaveIcon } from "@/components/ui/icons";

export function VisionStatement() {
  const t = useTranslations("home.vision");

  return (
    <SectionWrapper className="bg-white" id="vision">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-ocean-50 border border-ocean-100 mb-6 text-ocean-600">
          <WaveIcon className="h-7 w-7" />
        </div>
        <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-6">
          {t("title")}
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          {t("body")}
        </p>
      </div>
    </SectionWrapper>
  );
}
