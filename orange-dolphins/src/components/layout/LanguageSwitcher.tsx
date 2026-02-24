"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "el", label: "GR" },
  { code: "tr", label: "TR" },
  { code: "it", label: "IT" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {LOCALES.map((loc, i) => (
        <span key={loc.code} className="flex items-center gap-1">
          <button
            onClick={() => handleChange(loc.code)}
            className={cn(
              "text-xs font-semibold transition-colors px-1 py-0.5 rounded",
              locale === loc.code
                ? "text-orange-500"
                : "text-gray-500 hover:text-orange-500"
            )}
            aria-label={`Switch to ${loc.label}`}
          >
            {loc.label}
          </button>
          {i < LOCALES.length - 1 && (
            <span className="text-gray-300 text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
