import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SunIcon, MoonIcon } from "@/components/ui/icons";

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

        {/* Delivery windows — clean pill callout */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest shrink-0">
            Delivery windows
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-medium px-4 py-2">
              <SunIcon className="h-4 w-4 text-orange-500" />
              Morning · 9:00 – 11:00
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-ocean-50 border border-ocean-100 text-ocean-700 text-sm font-medium px-4 py-2">
              <MoonIcon className="h-4 w-4 text-ocean-500" />
              Evening · 17:00 – 19:00
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
