import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function ProductCategoriesPreview() {
  const t = useTranslations("home.categories");
  const items = t.raw("items") as Array<{
    name: string;
    description: string;
  }>;

  return (
    <section className="bg-grey-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-4">
          <div>
            <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5">
              {t("title")}
            </p>
            <h2
              className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              {t("title")}
            </h2>
          </div>
          <Link
            href="/our-offer"
            className="shrink-0 self-start lg:self-auto inline-flex items-center justify-center rounded-full border-2 border-darkGreen text-darkGreen hover:bg-darkGreen hover:text-white font-display font-bold text-[0.7rem] tracking-[0.18em] uppercase px-7 py-3 transition-colors"
          >
            {t("fullCatalogue")} →
          </Link>
        </div>

        {/* Editorial numbered rows */}
        <div className="divide-y divide-darkGreen/10 mt-12">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10 py-7 cursor-default"
            >
              {/* Bullet */}
              <span className="text-darkGreen/25 text-base w-8 shrink-0 group-hover:text-orange-500 transition-colors duration-200 select-none">
                •
              </span>

              {/* Category name — the star */}
              <h3
                className="font-display font-extrabold text-darkGreen leading-none group-hover:text-orange-500 transition-colors duration-200"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
              >
                {item.name}
              </h3>

              {/* Description — pushed right */}
              <p className="sm:ml-auto text-darkGreen/55 font-sans text-sm leading-relaxed sm:text-right max-w-xs shrink-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
