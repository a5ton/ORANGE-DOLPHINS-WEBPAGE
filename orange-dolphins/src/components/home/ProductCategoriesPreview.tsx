import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  LeafIcon,
  ShoppingCartIcon,
  BeakerIcon,
  GlobeAltIcon,
  CakeIcon,
  CubeIcon,
} from "@/components/ui/icons";
import { ComponentType, SVGProps } from "react";

const CATEGORY_ICONS: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>[] = [
  LeafIcon,
  ShoppingCartIcon,
  BeakerIcon,
  GlobeAltIcon,
  CakeIcon,
  CubeIcon,
];

const CATEGORY_COLORS = [
  "text-green-600 bg-green-50",
  "text-blue-600 bg-blue-50",
  "text-red-600 bg-red-50",
  "text-sky-600 bg-sky-50",
  "text-amber-600 bg-amber-50",
  "text-cyan-600 bg-cyan-50",
];

export function ProductCategoriesPreview() {
  const t = useTranslations("home.categories");
  const items = t.raw("items") as Array<{
    name: string;
    description: string;
  }>;

  return (
    <SectionWrapper className="bg-sand-100" id="categories">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-500 text-lg">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, i) => {
          const Icon = CATEGORY_ICONS[i % CATEGORY_ICONS.length];
          const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
          return (
            <div
              key={item.name}
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${color} group-hover:scale-110 transition-transform duration-200`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-ocean-900 text-sm leading-tight mb-1">
                {item.name}
              </h3>
              <p className="text-gray-400 text-xs leading-snug hidden md:block">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
