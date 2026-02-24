import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ReadMoreToggle } from "@/components/ui/ReadMoreToggle";

export function FounderBio() {
  const t = useTranslations("about.bio");

  return (
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Photo placeholder */}
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/3] bg-grey-100 border border-gray-100 flex items-center justify-center">
            <p className="text-sm text-gray-300 font-medium text-center px-6">
              Inna &amp; Sigi<br />Photo coming soon
            </p>
          </div>
        </div>

        {/* Bio text */}
        <div className="order-1 lg:order-2">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-5">
            Our Story
          </p>
          <h2
            className="font-display font-extrabold text-gray-900 leading-[0.93] tracking-tight mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {t("title")}
          </h2>
          <ReadMoreToggle
            short={
              <div className="text-gray-500 leading-relaxed space-y-4 text-base">
                {t("short")
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>
            }
            long={
              <div className="text-gray-500 leading-relaxed space-y-4 text-base">
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
      </div>
    </SectionWrapper>
  );
}
