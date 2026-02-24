import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function OrderStepsSection() {
  const t = useTranslations("offer.steps");
  const steps = t.raw("items") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <SectionWrapper className="bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4 block">
            {t("title")}
          </span>
          <h2 className="font-display font-black text-gray-900 text-4xl sm:text-5xl md:text-6xl leading-[0.93] tracking-tight">
            {t("subtitle")}
          </h2>
        </div>

        {/* Numbered steps — vertical list */}
        <ol className="space-y-0">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex gap-8 py-8 border-t border-gray-100 first:border-0 group"
            >
              {/* Number */}
              <span className="font-display font-black text-gray-200 text-4xl leading-none w-12 shrink-0 group-hover:text-orange-200 transition-colors duration-300">
                {step.number}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </SectionWrapper>
  );
}
