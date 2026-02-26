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
    <section className="bg-lightGreen">
      {/* Section header — white on lightGreen */}
      <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-white/70 mb-6 block">
              {t("label")}
            </span>
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl leading-[0.93] tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-6 text-white/70 text-lg font-sans font-normal leading-relaxed max-w-sm">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="/our-offer"
            className="shrink-0 self-start inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white font-display font-bold text-[0.7rem] sm:text-[0.8rem] tracking-[0.18em] uppercase px-9 sm:px-10 py-3.5 sm:py-4 transition-colors"
          >
            {t("learnMore")} →
          </Link>
        </div>
      </div>

      {/* 2×2 grid — white cards with darkGreen text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-lightGreen/40">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="relative p-10 overflow-hidden bg-white"
          >
            {/* Ghost number — bottom-right corner */}
            <span
              className="absolute right-4 bottom-2 font-display font-extrabold text-lightGreen/30 leading-none select-none pointer-events-none"
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
    </section>
  );
}
