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
          className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("title")}
        </h2>
        <p className="text-darkGreen/70 text-lg leading-relaxed">{t("description")}</p>
      </div>
    </SectionWrapper>
  );
}
