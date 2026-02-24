import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProductCategoriesGrid() {
  const t = useTranslations("offer.categories");
  const groups = t.raw("groups") as Array<{
    name: string;
    items: string[];
  }>;

  return (
    <SectionWrapper className="bg-grey-100">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4 block">
            What We Deliver
          </span>
          <h2 className="font-display font-extrabold text-darkGreen text-4xl sm:text-5xl md:text-6xl leading-[0.93] tracking-tight">
            {t("title")}
          </h2>
        </div>

        <div className="divide-y divide-darkGreen/10">
          {groups.map((group) => (
            <div key={group.name} className="py-8 flex flex-col sm:flex-row sm:gap-16 gap-4">
              {/* Category name */}
              <h3 className="font-display font-bold text-darkGreen text-lg sm:w-48 shrink-0">
                {group.name}
              </h3>

              {/* Item list */}
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block text-sm text-darkGreen/60 bg-white border border-darkGreen/10 rounded-full px-4 py-1.5 hover:border-orange-500/40 hover:text-orange-500 transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
