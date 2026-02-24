import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ReadMoreToggle } from "@/components/ui/ReadMoreToggle";

export function FounderBio() {
  const t = useTranslations("about.bio");

  return (
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">

        {/* Left: bio text */}
        <div className="flex flex-col justify-start">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-5">
            Our Story
          </p>
          <h2
            className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {t("title")}
          </h2>
          <div className="w-10 h-px bg-orange-500 mb-8" />
          <ReadMoreToggle
            short={
              <div className="text-darkGreen/60 leading-relaxed space-y-4 text-base font-sans">
                {t("short")
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>
            }
            long={
              <div className="text-darkGreen/60 leading-relaxed space-y-4 text-base font-sans">
                {t("long")
                  .split("\n\n")
                  .slice(1)
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>
            }
            readMoreLabel={t("readMore")}
            readLessLabel={t("readLess")}
          />
        </div>

        {/* Right: two stacked landscape images */}
        <div className="flex flex-col gap-3 min-h-[400px] lg:min-h-0">
          {/* Image 1 — swap div for <Image src="..." alt="..." fill className="object-cover" /> */}
          <div className="relative flex-1 min-h-[180px] bg-grey-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xs text-gray-300 font-sans italic">Photo coming soon</p>
            </div>
          </div>
          {/* Image 2 — swap div for <Image src="..." alt="..." fill className="object-cover" /> */}
          <div className="relative flex-1 min-h-[180px] bg-grey-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xs text-gray-300 font-sans italic">Photo coming soon</p>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
