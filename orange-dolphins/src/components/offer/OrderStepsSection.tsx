import { useTranslations } from "next-intl";

export function OrderStepsSection() {
  const t = useTranslations("offer.steps");
  const steps = t.raw("items") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="bg-white py-20 md:py-28 rounded-3xl overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6 block">
            {t("title")}
          </span>
          <h2 className="font-display font-extrabold text-darkGreen text-4xl sm:text-5xl leading-[0.93] tracking-tight">
            {t("subtitle")}
          </h2>
          <div className="mt-6 w-12 h-px bg-orange-500" />
        </div>

        {/* 2×2 grid of steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-darkGreen/10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-10 overflow-hidden bg-white"
            >
              {/* Ghost number — bottom-right corner */}
              <span
                className="absolute right-4 bottom-2 font-display font-extrabold text-darkGreen/[0.05] leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(5rem, 11vw, 8rem)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative">
                <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5 block">
                  {t("stepLabel")} {i + 1}
                </span>
                <h3 className="font-display font-extrabold text-darkGreen text-3xl sm:text-4xl leading-[0.93] tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-darkGreen/60 text-base font-sans leading-relaxed max-w-xs">
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
