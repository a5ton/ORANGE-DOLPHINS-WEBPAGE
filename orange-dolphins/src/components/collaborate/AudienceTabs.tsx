"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const TAB_KEYS = ["charter", "marina", "business", "rider"] as const;
type TabKey = (typeof TAB_KEYS)[number];

export function AudienceTabs() {
  const [active, setActive] = useState<TabKey>("charter");
  const t = useTranslations("collaborate.tabs");

  const tabs = TAB_KEYS.map((key) => ({
    key,
    label: t(`${key}.label`),
    title: t(`${key}.title`),
    bullets: t.raw(`${key}.bullets`) as string[],
  }));

  const activeTab = tabs.find((tab) => tab.key === active)!;

  return (
    <section className="bg-darkGreen py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-0 border-b border-white/10 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={cn(
                "pr-8 py-4 text-xs font-display font-bold tracking-[0.18em] uppercase border-b-2 -mb-px transition-colors",
                active === tab.key
                  ? "border-orange-500 text-white"
                  : "border-transparent text-white/35 hover:text-white/60"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6 block">
            {activeTab.label}
          </span>
          <h3
            className="font-display font-extrabold text-white leading-[0.93] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            {activeTab.title}
          </h3>
          <div className="mt-8 w-12 h-px bg-orange-500" />
          <ul className="mt-12 space-y-7">
            {activeTab.bullets.map((bullet, i) => {
              const colonIdx = bullet.indexOf(":");
              const bold = colonIdx > -1 ? bullet.slice(0, colonIdx) : bullet;
              const rest = colonIdx > -1 ? bullet.slice(colonIdx + 1) : "";
              return (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="text-orange-500 shrink-0 leading-none select-none"
                    style={{ fontSize: "1.1rem", marginTop: "0.15em" }}
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <p className="text-white/65 leading-relaxed text-base sm:text-lg">
                    <strong className="text-white font-semibold">{bold}</strong>
                    {rest ? `:${rest}` : ""}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}
