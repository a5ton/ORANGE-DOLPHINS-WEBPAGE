import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function DeliveryDescription() {
  const t = useTranslations("offer.delivery");

  return (
    <SectionWrapper className="bg-blue-500">
      <div className="max-w-3xl">
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5">
          Our Service
        </p>
        <h2
          className="font-display font-extrabold text-white leading-[0.93] tracking-tight mb-8"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("title")}
        </h2>
        <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 font-sans">
          {t("description")}
        </p>
      </div>
    </SectionWrapper>
  );
}
