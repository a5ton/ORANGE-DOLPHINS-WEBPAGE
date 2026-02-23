"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

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
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Underline tab bar */}
        <div className="flex flex-wrap gap-0 border-b border-gray-100 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={cn(
                "px-5 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors",
                active === tab.key
                  ? "border-orange-500 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content — left border accent */}
        <div className="pl-8 border-l-2 border-orange-500">
          <h3 className="font-display font-bold text-gray-900 text-2xl md:text-3xl mb-8">
            {activeTab.title}
          </h3>
          <ul className="space-y-5">
            {activeTab.bullets.map((bullet, i) => {
              const colonIdx = bullet.indexOf(":");
              const bold = colonIdx > -1 ? bullet.slice(0, colonIdx) : bullet;
              const rest = colonIdx > -1 ? bullet.slice(colonIdx + 1) : "";
              return (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-gray-600 leading-relaxed">
                    <strong className="text-gray-900 font-semibold">
                      {bold}
                    </strong>
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
