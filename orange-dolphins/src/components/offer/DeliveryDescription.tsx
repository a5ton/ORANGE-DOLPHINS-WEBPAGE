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
    <SectionWrapper className="bg-neutral-950">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-5">
          Our Service
        </p>
        <h2
          className="font-display font-bold italic text-white leading-[0.93] tracking-tight mb-8"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("title")}
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10">
          {t("description")}
        </p>
        <div className="flex flex-wrap gap-3 pt-8 border-t border-neutral-800">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 border border-neutral-700 text-neutral-300 text-sm font-medium px-4 py-2"
            >
              <CheckCircleIcon className="h-4 w-4 text-orange-500 shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
