import { useTranslations } from "next-intl";
import { FounderBio } from "@/components/about/FounderBio";
import { BrownieSection } from "@/components/about/BrownieSection";
import { FoundingStory } from "@/components/about/FoundingStory";
import { CtaSection } from "@/components/home/CtaSection";
import { FadeReveal } from "@/components/ui/FadeReveal";

function AboutHero() {
  const t = useTranslations("about.hero");
  return (
    <section className="bg-grey-100 pt-28 pb-16 md:pt-36 md:pb-20">
      <FadeReveal className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6">
          Our Story
        </p>
        <h1
          className="font-display font-extrabold text-darkGreen leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
        >
          {t("title")}
        </h1>
        <div className="mt-8 w-12 h-px bg-orange-500" />
        <p className="mt-8 text-darkGreen/60 text-lg sm:text-xl max-w-xl font-sans font-normal leading-relaxed">
          {t("subtitle")}
        </p>
      </FadeReveal>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderBio />
      <FoundingStory />
      <BrownieSection />
      <CtaSection />
    </>
  );
}
