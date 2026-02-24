import { useTranslations } from "next-intl";
import { AudienceTabs } from "@/components/collaborate/AudienceTabs";
import { CollaborateForm } from "@/components/collaborate/CollaborateForm";

function CollaborateHero() {
  const t = useTranslations("collaborate.hero");
  return (
    <section className="bg-blue-500 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6">
          Work With Us
        </p>
        <h1
          className="font-display font-extrabold text-white leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
        >
          {t("title")}
        </h1>
        <div className="mt-8 w-12 h-px bg-orange-500" />
        <p className="mt-8 text-white/70 text-lg sm:text-xl max-w-xl font-sans font-normal leading-relaxed">
          {t("subtitle")}
        </p>
      </div>
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
