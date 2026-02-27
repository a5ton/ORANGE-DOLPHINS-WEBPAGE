"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function ProductCategoriesPreview() {
  const t = useTranslations("home.categories");
  const items = t.raw("items") as Array<{
    name: string;
    description: string;
  }>;

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="bg-white py-24 md:py-32 rounded-3xl overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
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
            className="shrink-0 self-start lg:self-auto inline-flex items-center justify-center rounded-full border-2 border-darkGreen text-darkGreen hover:bg-darkGreen hover:text-white font-display font-bold text-[0.7rem] tracking-[0.18em] uppercase px-7 py-3 transition-colors duration-200"
          >
            {t("fullCatalogue")} →
          </Link>
        </div>

        {/* Accordion rows */}
        <div className="divide-y divide-darkGreen/10">
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={item.name}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 sm:py-7 text-left group"
                >
                  {/* Bullet dot */}
                  <span
                    className="shrink-0 w-2 h-2 rounded-full bg-darkGreen/20 group-hover:bg-orange-500 transition-colors duration-200 select-none"
                    aria-hidden="true"
                  />

                  {/* Category name */}
                  <h3
                    className="flex-1 font-display font-extrabold text-darkGreen leading-none group-hover:text-orange-500 transition-colors duration-200"
                    style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
                  >
                    {item.name}
                  </h3>

                  {/* Animated +/× icon */}
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "border-orange-500 bg-orange-500"
                        : "border-darkGreen/20 group-hover:border-orange-500 group-hover:bg-orange-500"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke={isOpen ? "#fff" : "currentColor"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Expandable description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pl-6 pb-6 text-darkGreen/60 font-sans text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
