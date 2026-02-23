import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PhoneIcon, AnchorIcon, ShoppingBagIcon, SunIcon } from "@/components/ui/icons";

const STEP_ICONS = [PhoneIcon, AnchorIcon, ShoppingBagIcon, SunIcon];

export function HowItWorksTeaser() {
  const t = useTranslations("home.howItWorks");
  const steps = t.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <SectionWrapper className="bg-white" id="how-it-works">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-500 text-lg">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {steps.map((step, i) => (
          <div key={step.number} className="relative flex flex-col items-center text-center">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-200 to-orange-100 z-0" />
            )}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white shadow-lg mb-4">
                {(() => { const Icon = STEP_ICONS[i]; return <Icon className="h-7 w-7" />; })()}
              </div>
              <span className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-1">
                {step.number}
              </span>
              <h3 className="font-display font-semibold text-ocean-900 text-base mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/our-offer"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
        >
          {t("learnMore")} →
        </Link>
      </div>
    </SectionWrapper>
  );
}
