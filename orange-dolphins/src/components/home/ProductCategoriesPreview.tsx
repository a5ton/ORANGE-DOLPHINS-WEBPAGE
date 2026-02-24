import { useTranslations } from "next-intl";
import { FadeReveal } from "@/components/ui/FadeReveal";

export function ProductCategoriesPreview() {
  const t = useTranslations("home.categories");
  const items = t.raw("items") as Array<{
    name: string;
    description: string;
  }>;

  return (
    <section className="bg-white py-24 md:py-32">
      <FadeReveal className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-4">
            What We Deliver
          </p>
          <h2
            className="font-display font-extrabold text-gray-900 leading-[0.93] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            {t("title")}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item.name}
              className="inline-flex flex-col border border-gray-100 hover:border-orange-300 hover:bg-orange-50 px-5 py-3 transition-colors cursor-default"
            >
              <span className="font-semibold text-gray-900 text-sm">
                {item.name}
              </span>
              <span className="text-gray-400 text-xs mt-0.5">
                {item.description}
              </span>
            </span>
          ))}
        </div>
      </FadeReveal>
    </section>
  );
}
