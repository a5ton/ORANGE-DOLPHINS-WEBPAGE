import { useTranslations } from "next-intl";

export function OrderStepsSection() {
  const t = useTranslations("offer.steps");
  const steps = t.raw("items") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="bg-blue-500 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-8 block">
            {t("title")}
          </span>
          <h2 className="font-display font-extrabold text-white text-5xl sm:text-6xl md:text-7xl leading-[0.93] tracking-tight">
            {t("subtitle")}
          </h2>
          <div className="mt-8 w-12 h-px bg-orange-500" />
        </div>

        {/* Steps — stacked with ghost number backdrop */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative py-14 border-t border-white/10 overflow-hidden"
            >
              {/* Ghost number — decorative right-side backdrop */}
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-extrabold text-white/[0.06] select-none pointer-events-none leading-none"
                style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative max-w-2xl">
                <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5 block">
                  Step {i + 1} of {steps.length}
                </span>
                <h3 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[0.93] tracking-tight mb-5">
                  {step.title}
                </h3>
                <p className="text-white/75 text-lg sm:text-xl font-sans font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
