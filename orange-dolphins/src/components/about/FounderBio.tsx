import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ReadMoreToggle } from "@/components/ui/ReadMoreToggle";
import { SailboatIcon, HeartIcon } from "@/components/ui/icons";

export function FounderBio() {
  const t = useTranslations("about.bio");

  return (
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-ocean-100 to-ocean-200 aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-8">
              <SailboatIcon className="h-20 w-20 text-ocean-400 mx-auto mb-4" />
              <p className="text-ocean-600 font-medium text-sm">
                Inna & Sigi — Photo coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Bio text */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 mb-6">
            <HeartIcon className="h-4 w-4" /> Our Story
          </div>
          <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-6">
            {t("title")}
          </h2>
          <ReadMoreToggle
            short={
              <div className="text-gray-600 leading-relaxed space-y-4">
                {t("short")
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>
            }
            long={
              <div className="text-gray-600 leading-relaxed space-y-4">
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
