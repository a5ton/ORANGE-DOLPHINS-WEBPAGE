"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  SailboatIcon,
  AnchorIcon,
  BuildingStorefrontIcon,
  DolphinIcon,
} from "@/components/ui/icons";
import { ComponentType, SVGProps } from "react";

const TAB_KEYS = ["charter", "marina", "business", "rider"] as const;
type TabKey = (typeof TAB_KEYS)[number];

const TAB_ICONS: Record<TabKey, ComponentType<SVGProps<SVGSVGElement> & { className?: string }>> = {
  charter: SailboatIcon,
  marina: AnchorIcon,
  business: BuildingStorefrontIcon,
  rider: DolphinIcon,
};

export function AudienceTabs() {
  const [active, setActive] = useState<TabKey>("charter");
  const t = useTranslations("collaborate.tabs");

  const tabs = TAB_KEYS.map((key) => ({
    key,
    label: t(`${key}.label`),
    title: t(`${key}.title`),
    bullets: t.raw(`${key}.bullets`) as string[],
    isRider: key === "rider",
  }));

  const activeTab = tabs.find((tab) => tab.key === active)!;
  const ActiveIcon = TAB_ICONS[active];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((tab) => {
            const Icon = TAB_ICONS[tab.key];
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                  tab.isRider
                    ? active === tab.key
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-orange-50 text-orange-600 hover:bg-orange-100 border-2 border-orange-200"
                    : active === tab.key
                      ? "bg-ocean-700 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div
          className={cn(
            "rounded-3xl p-8 md:p-12",
            activeTab.isRider
              ? "bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200"
              : "bg-ocean-50 border border-ocean-100"
          )}
        >
          <div className="flex items-center gap-3 mb-6">
            <ActiveIcon
              className={cn(
                "h-10 w-10 shrink-0",
                activeTab.isRider ? "text-orange-500" : "text-ocean-600"
              )}
            />
            <h3
              className={cn(
                "font-display font-bold text-2xl md:text-3xl",
                activeTab.isRider ? "text-orange-700" : "text-ocean-900"
              )}
            >
              {activeTab.title}
            </h3>
          </div>

          <ul className="space-y-4">
            {activeTab.bullets.map((bullet, i) => {
              const [boldPart, ...rest] = bullet.split(":");
              return (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon
                    className={cn(
                      "h-6 w-6 shrink-0 mt-0.5",
                      activeTab.isRider ? "text-orange-500" : "text-ocean-600"
                    )}
                  />
                  <p className="text-gray-700 leading-relaxed">
                    <strong
                      className={
                        activeTab.isRider ? "text-orange-700" : "text-ocean-900"
                      }
                    >
                      {boldPart}:
                    </strong>{" "}
                    {rest.join(":")}
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
