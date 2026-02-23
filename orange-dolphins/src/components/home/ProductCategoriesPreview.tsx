import { useTranslations } from "next-intl";
import { FadeReveal } from "@/components/ui/FadeReveal";

export function ProductCategoriesPreview() {
  const t = useTranslations("home.categories");
  const items = t.raw("items") as Array<{
    name: string;
    description: string;
  }>;

  return (
    <section className="bg-white py-24 md:py-32 flex flex-col items-center justify-center text-center px-6">
      <FadeReveal>
        <span className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-8 block">
          What We Deliver
        </span>
        <h2 className="font-display font-black text-gray-900 text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight mb-16">
          {t("title")}
        </h2>

        {/* Horizontal pill list */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
          {items.map((item) => (
            <span
              key={item.name}
              className="inline-flex flex-col items-center rounded-full border border-gray-200 px-6 py-3 hover:border-orange-300 hover:bg-orange-50 transition-colors cursor-default"
            >
              <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
              <span className="text-gray-400 text-xs mt-0.5">{item.description}</span>
            </span>
          ))}
        </div>
      </FadeReveal>
    </section>
  );
}
