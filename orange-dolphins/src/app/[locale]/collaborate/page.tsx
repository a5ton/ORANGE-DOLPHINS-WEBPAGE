import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AudienceTabs } from "@/components/collaborate/AudienceTabs";

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

function CollaborateCta() {
  return (
    <section className="bg-grey-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <span className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6 block">
              Ready to Join?
            </span>
            <h2
              className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Let&rsquo;s talk.
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-[0.7rem] sm:text-[0.8rem] tracking-[0.18em] uppercase px-10 py-4 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CollaboratePage() {
  return (
    <>
      <CollaborateHero />
      <AudienceTabs />
      <CollaborateCta />
    </>
  );
}
