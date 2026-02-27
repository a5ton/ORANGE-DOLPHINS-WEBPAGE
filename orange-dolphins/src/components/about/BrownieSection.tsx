import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";

export function BrownieSection() {
  const t = useTranslations("about.brownie");

  return (
    <SectionWrapper className="bg-white rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left: circular photo */}
        <div className="flex items-center justify-center">
          {/* Swap the inner div for: <Image src="..." alt="Brownie" fill className="object-cover" /> */}
          <div className="relative w-full max-w-[380px] mx-auto aspect-square rounded-full overflow-hidden shadow-md">
            <Image
              src="/d178707d58e38b0d90bb9026956246fd.jpg"
              fill
              className="object-cover object-center"
              alt="Brownie — the Orange Dolphins mascot"
              sizes="380px"
            />
          </div>
        </div>

        {/* Right: text */}
        <div>
          <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5">
            Meet the Crew
          </p>
          <h2
            className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {t("title")}
          </h2>
          <div className="w-10 h-px bg-orange-500 mb-6" />
          <p className="text-darkGreen/70 text-lg leading-relaxed font-sans">
            {t("description")}
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
}
