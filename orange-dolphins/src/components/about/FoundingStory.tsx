import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MapPinIcon, ArrowRightIcon } from "@/components/ui/icons";

export function FoundingStory() {
  const t = useTranslations("about.founding");

  return (
    <SectionWrapper className="bg-blue-500">
      <div className="max-w-3xl">
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-300 mb-5">
          Origins
        </p>
        <h2
          className="font-display font-extrabold text-white leading-[0.93] tracking-tight mb-8"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("title")}
        </h2>
        <div className="text-blue-100 text-lg leading-relaxed space-y-4 mb-10 font-sans">
          {t("description")
            .split("\n\n")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-blue-400/50">
          <div className="flex items-center gap-3">
            <MapPinIcon className="h-4 w-4 text-neutral-500 shrink-0" />
            <span className="text-sm text-white font-sans font-medium">{t("leros")}</span>
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
