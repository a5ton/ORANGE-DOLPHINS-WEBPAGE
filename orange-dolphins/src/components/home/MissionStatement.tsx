import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TargetIcon } from "@/components/ui/icons";

export function MissionStatement() {
  const t = useTranslations("home.mission");

  return (
    <SectionWrapper className="bg-ocean-50" id="mission">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border border-orange-200 mb-6 text-orange-500">
          <TargetIcon className="h-7 w-7" />
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
