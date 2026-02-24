"use client";

import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "el", label: "GR" },
  { code: "tr", label: "TR" },
  { code: "it", label: "IT" },
];

export function LanguageSwitcher({
  className,
  transparent = false,
}: {
  className?: string;
  transparent?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {LOCALES.map((loc, i) => (
        <span key={loc.code} className="flex items-center gap-1">
          <Link
            href={pathname}
            locale={loc.code}
            className={cn(
              "text-xs font-semibold transition-colors px-1 py-0.5 rounded",
              locale === loc.code
                ? "text-orange-500"
                : transparent
                ? "text-white/80 hover:text-white"
                : "text-gray-500 hover:text-orange-500"
            )}
            aria-label={`Switch to ${loc.label}`}
          >
            {loc.label}
          </Link>
          {i < LOCALES.length - 1 && (
            <span className={cn("text-xs", transparent ? "text-white/30" : "text-gray-300")}>|</span>
          )}
        </span>
      ))}
    </div>
  );
}
