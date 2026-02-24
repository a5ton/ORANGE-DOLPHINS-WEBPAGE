import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function BrownieSection() {
  const t = useTranslations("about.brownie");

  return (
    <SectionWrapper className="bg-grey-100">
      <div className="max-w-xl">
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5">
          Meet the Crew
        </p>
        <h2
          className="font-display font-extrabold text-gray-900 leading-[0.93] tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("title")}
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">{t("description")}</p>
      </div>
    </SectionWrapper>
  );
}
