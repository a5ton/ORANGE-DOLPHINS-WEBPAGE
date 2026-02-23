"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DolphinIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/our-offer", key: "offer" },
  { href: "/partners", key: "partners" },
  { href: "/collaborate", key: "collaborate" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
              <DolphinIcon className="h-5 w-5" />
            </div>
            <span className="font-display font-bold text-ocean-900 text-lg leading-tight hidden sm:block">
              Orange<br />
              <span className="text-orange-500">Dolphins</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-600 hover:text-ocean-700 hover:bg-gray-50"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Right side: SHOP NOW + language */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden md:flex" />
            <Link
              href="/our-offer"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold tracking-wide transition-all duration-200 shadow-md px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              {t("shopNow")}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-ocean-700 hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-ocean-700 hover:bg-gray-50"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="pt-3 pb-1 px-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
