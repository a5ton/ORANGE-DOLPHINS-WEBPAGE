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
    <section className="bg-blue-500 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6 block">
            {t("label")}
          </span>
          <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl leading-[0.93] tracking-tight">
            {t("title")}
          </h2>
          <div className="mt-6 w-12 h-px bg-orange-500" />
          <p className="mt-6 text-white/75 text-lg font-sans font-normal leading-relaxed max-w-sm">
            {t("subtitle")}
          </p>
        </div>

        {/* 2×2 grid of steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-10 overflow-hidden bg-blue-500"
            >
              {/* Ghost number — bottom-right corner */}
              <span
                className="absolute right-4 bottom-2 font-display font-extrabold text-white/[0.07] leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(5rem, 11vw, 8rem)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative">
                <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5 block">
                  {t("stepLabel")} {i + 1}
                </span>
                <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl leading-[0.93] tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-white/75 text-base font-sans leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-10 mt-px">
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
