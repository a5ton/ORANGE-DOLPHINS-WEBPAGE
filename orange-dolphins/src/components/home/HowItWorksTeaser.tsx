import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function HowItWorksTeaser() {
  const t = useTranslations("home.howItWorks");
  const steps = t.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="bg-blue-500 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-400 mb-8 block">
            How It Works
          </span>
          <h2 className="font-display font-extrabold text-white text-5xl sm:text-6xl md:text-7xl leading-[0.93] tracking-tight">
            {t("title")}
          </h2>
          <div className="mt-8 w-12 h-px bg-orange-500" />
          <p className="mt-8 text-lightGreen text-xl font-sans font-normal leading-relaxed max-w-sm">
            {t("subtitle")}
          </p>
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
                <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-400 mb-5 block">
                  Step {i + 1} of {steps.length}
                </span>
                <h3 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[0.93] tracking-tight mb-5">
                  {step.title}
                </h3>
                <p className="text-lightGreen text-lg sm:text-xl font-sans font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-14 border-t border-white/10">
          <Link
            href="/our-offer"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-[0.7rem] sm:text-[0.8rem] tracking-[0.18em] uppercase px-9 sm:px-10 py-3.5 sm:py-4 transition-colors"
          >
            {t("learnMore")} →
          </Link>
        </div>

      </div>
    </section>
  );
}
