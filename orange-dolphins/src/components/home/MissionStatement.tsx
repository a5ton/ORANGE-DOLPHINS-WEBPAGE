import { useTranslations } from "next-intl";

export function MissionStatement() {
  const t = useTranslations("home.mission");

  return (
    <section className="bg-white">
      {/* Top strip — just the label and a rule */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-10">
        <div className="flex items-center gap-6">
          <span className="text-xs font-display font-bold tracking-[0.22em] uppercase text-orange-500 shrink-0">
            {t("title")}
          </span>
          <div className="flex-1 h-px bg-darkGreen/10" />
        </div>
      </div>

      {/* Quote block — darkGreen on white, opening mark as display element */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="relative">
          {/* Giant opening quotation mark */}
          <span
            className="absolute -top-6 -left-2 sm:-left-4 font-display font-extrabold text-orange-500 leading-none select-none pointer-events-none"
            style={{ fontSize: "clamp(6rem, 14vw, 16rem)", lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote
            className="relative font-display font-extrabold text-darkGreen leading-[0.88] tracking-tight pt-16 sm:pt-20 lg:pt-24"
            style={{ fontSize: "clamp(3rem, 8.5vw, 9.5rem)" }}
          >
            {t("quoteLine1")}
            <br />
            {t("quoteLine2")}
          </blockquote>
        </div>
      </div>

      {/* Body strip — white band, text right-aligned on desktop */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-14 flex flex-col sm:flex-row sm:items-center sm:justify-end">
          <p className="text-darkGreen/60 text-base sm:text-lg leading-relaxed font-sans font-normal max-w-2xl">
            {t("body")}
          </p>
        </div>
      </div>
    </section>
  );
}
