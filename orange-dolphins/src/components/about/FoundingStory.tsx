import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MapPinIcon, ArrowRightIcon } from "@/components/ui/icons";

export function FoundingStory() {
  const t = useTranslations("about.founding");

  return (
    <SectionWrapper className="bg-neutral-950">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-5">
          Origins
        </p>
        <h2
          className="font-display font-bold italic text-white leading-[0.93] tracking-tight mb-8"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("title")}
        </h2>
        <div className="text-neutral-400 text-lg leading-relaxed space-y-4 mb-10">
          {t("description")
            .split("\n\n")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-neutral-800">
          <div className="flex items-center gap-3">
            <MapPinIcon className="h-4 w-4 text-neutral-500 shrink-0" />
            <span className="text-sm text-neutral-300 font-medium">{t("leros")}</span>
          </div>
          <div className="flex items-center gap-3">
            <ArrowRightIcon className="h-4 w-4 text-orange-500 shrink-0" />
            <span className="text-sm text-orange-400 font-medium">{t("expansion")}</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
