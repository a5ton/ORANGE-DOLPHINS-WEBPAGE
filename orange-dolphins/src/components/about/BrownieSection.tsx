import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PawIcon } from "@/components/ui/icons";

export function BrownieSection() {
  const t = useTranslations("about.brownie");

  return (
    <SectionWrapper className="bg-orange-50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 border-2 border-orange-200 mb-6 text-orange-500">
          <PawIcon className="h-10 w-10" />
        </div>
        <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">{t("description")}</p>
      </div>
    </SectionWrapper>
  );
}
