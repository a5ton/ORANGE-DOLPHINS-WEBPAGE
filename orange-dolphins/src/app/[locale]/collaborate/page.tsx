import { useTranslations } from "next-intl";
import { AudienceTabs } from "@/components/collaborate/AudienceTabs";
import { CollaborateForm } from "@/components/collaborate/CollaborateForm";
import { HandshakeIcon } from "@/components/ui/icons";
import { FadeReveal } from "@/components/ui/FadeReveal";

function CollaborateHero() {
  const t = useTranslations("collaborate.hero");
  return (
    <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-24 text-center">
      <FadeReveal className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <HandshakeIcon className="h-16 w-16 text-ocean-300" />
        </div>
        <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-4">
          {t("title")}
        </h1>
        <p className="text-ocean-100 text-xl">{t("subtitle")}</p>
      </FadeReveal>
    </section>
  );
}

export default function CollaboratePage() {
  return (
    <>
      <CollaborateHero />
      <AudienceTabs />
      <CollaborateForm />
    </>
  );
}
