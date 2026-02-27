import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ReadMoreToggle } from "@/components/ui/ReadMoreToggle";
import Image from "next/image";

export function FounderBio() {
  const t = useTranslations("about.bio");

  return (
    <SectionWrapper className="bg-white rounded-3xl overflow-hidden">
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
          {/* Image 1 — replace src with real photo when available */}
          <div className="relative flex-1 min-h-[180px] rounded-2xl overflow-hidden">
            <Image
              src="/d178707d58e38b0d90bb9026956246fd.jpg"
              fill
              className="object-cover object-center"
              alt="Inna and Sigi — founders of Orange Dolphins"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Image 2 — replace src with real photo when available */}
          <div className="relative flex-1 min-h-[180px] rounded-2xl overflow-hidden">
            <Image
              src="/d178707d58e38b0d90bb9026956246fd.jpg"
              fill
              className="object-cover object-center"
              alt="Orange Dolphins on the water in Leros"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
