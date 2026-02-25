import { useTranslations } from "next-intl";

export function ProductCategoriesGrid() {
  const t = useTranslations("offer.categories");
  const groups = t.raw("groups") as Array<{
    name: string;
    items: string[];
  }>;

  return (
    <section className="bg-grey-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-4">
          <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-5">
            What We Deliver
          </p>
          <h2
            className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            {t("title")}
          </h2>
        </div>

        {/* Editorial numbered rows */}
        <div className="divide-y divide-darkGreen/10 mt-12">
          {groups.map((group) => (
            <div
              key={group.name}
              className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10 py-7 cursor-default"
            >
              {/* Bullet */}
              <span className="text-darkGreen/25 text-base w-8 shrink-0 group-hover:text-orange-500 transition-colors duration-200 select-none">
                •
              </span>

              {/* Category name */}
              <h3
                className="font-display font-extrabold text-darkGreen leading-none group-hover:text-orange-500 transition-colors duration-200"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
              >
                {group.name}
              </h3>

              {/* Items — pushed right as dot-separated list */}
              <p className="sm:ml-auto text-darkGreen/55 font-sans text-sm leading-relaxed sm:text-right max-w-xs shrink-0">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
