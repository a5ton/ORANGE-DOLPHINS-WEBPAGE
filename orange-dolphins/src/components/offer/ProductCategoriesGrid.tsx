import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  LeafIcon,
  ShoppingCartIcon,
  BeakerIcon,
  SparklesIcon,
  CubeIcon,
} from "@/components/ui/icons";
import { ComponentType, SVGProps } from "react";

const GROUP_COLORS = [
  "bg-green-50 border-green-200",
  "bg-blue-50 border-blue-200",
  "bg-purple-50 border-purple-200",
  "bg-red-50 border-red-200",
  "bg-cyan-50 border-cyan-200",
];

const GROUP_ICONS: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>[] = [
  LeafIcon,
  ShoppingCartIcon,
  SparklesIcon,
  BeakerIcon,
  CubeIcon,
];

const GROUP_ICON_COLORS = [
  "text-green-600",
  "text-blue-600",
  "text-purple-600",
  "text-red-600",
  "text-cyan-600",
];

export function ProductCategoriesGrid() {
  const t = useTranslations("offer.categories");
  const groups = t.raw("groups") as Array<{
    name: string;
    items: string[];
  }>;

  return (
    <SectionWrapper className="bg-sand-100">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-4">
          {t("title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {groups.map((group, i) => {
          const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
          const iconColor = GROUP_ICON_COLORS[i % GROUP_ICON_COLORS.length];
          return (
          <div
            key={group.name}
            className={`rounded-2xl border-2 p-5 ${GROUP_COLORS[i % GROUP_COLORS.length]}`}
          >
            <div className="mb-3">
              <Icon className={`h-8 w-8 ${iconColor}`} />
            </div>
            <h3 className="font-display font-bold text-ocean-900 text-base mb-3">
              {group.name}
            </h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-600 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
