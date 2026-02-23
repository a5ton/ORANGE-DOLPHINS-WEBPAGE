import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  PhoneIcon,
  AnchorIcon,
  SailboatIcon,
  ShoppingBagIcon,
  ClockIcon,
  SunIcon,
  MoonIcon,
} from "@/components/ui/icons";
import { ComponentType, SVGProps } from "react";

const STEP_ICONS: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>[] = [
  PhoneIcon,
  AnchorIcon,
  SailboatIcon,
  ShoppingBagIcon,
  ClockIcon,
  SunIcon,
];

export function OrderStepsSection() {
  const t = useTranslations("offer.steps");
  const steps = t.raw("items") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <SectionWrapper className="bg-white">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-500 text-lg">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => {
          const Icon = STEP_ICONS[i % STEP_ICONS.length];
          return (
            <div
              key={step.number}
              className="relative flex gap-4 p-6 rounded-2xl bg-sand-100 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <div className="shrink-0">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500 text-white shadow-md">
                  <Icon className="h-7 w-7" />
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">
                  Step {step.number}
                </span>
                <h3 className="font-display font-semibold text-ocean-900 text-lg mt-0.5 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Delivery times callout */}
      <div className="mt-10 p-6 rounded-2xl bg-ocean-50 border border-ocean-100 max-w-lg mx-auto text-center">
        <p className="font-semibold text-ocean-900 mb-3">Delivery Windows</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-ocean-700">
            <SunIcon className="h-5 w-5" />
            <span className="font-medium">Morning: 9:00 – 11:00</span>
          </div>
          <div className="hidden sm:block text-ocean-300">|</div>
          <div className="flex items-center gap-2 text-ocean-700">
            <MoonIcon className="h-5 w-5" />
            <span className="font-medium">Evening: 17:00 – 19:00</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

