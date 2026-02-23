import { useTranslations } from "next-intl";
import { FounderBio } from "@/components/about/FounderBio";
import { BrownieSection } from "@/components/about/BrownieSection";
import { FoundingStory } from "@/components/about/FoundingStory";
import { CtaSection } from "@/components/home/CtaSection";
import { FadeReveal } from "@/components/ui/FadeReveal";

function AboutHero() {
  const t = useTranslations("about.hero");
  return (
    <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-24 text-center">
      <FadeReveal className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-4">
          {t("title")}
        </h1>
        <p className="text-ocean-100 text-xl">{t("subtitle")}</p>
      </FadeReveal>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderBio />
      <BrownieSection />
      <FoundingStory />
      <CtaSection />
    </>
  );
}
