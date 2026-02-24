import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CheckCircleIcon } from "@/components/ui/icons";

export function DeliveryDescription() {
  const t = useTranslations("offer.delivery");

  const badges = [
    "Fresh products",
    "Even at anchor",
    "Quality checked",
    "Friendly service",
  ];

  return (
    <SectionWrapper className="bg-blue-500">
      <div className="max-w-3xl">
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-300 mb-5">
          Our Service
        </p>
        <h2
          className="font-display font-extrabold text-white leading-[0.93] tracking-tight mb-8"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("title")}
        </h2>
        <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 font-sans">
          {t("description")}
        </p>
        <div className="flex flex-wrap gap-3 pt-8 border-t border-blue-400/50">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 border border-blue-300/50 text-white text-sm font-sans font-medium px-4 py-2 rounded-full"
            >
              <CheckCircleIcon className="h-4 w-4 text-orange-400 shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
