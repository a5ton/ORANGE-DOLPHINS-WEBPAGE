"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LanguageSwitcher } from "./LanguageSwitcher";

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
    <div className="sticky top-0 z-50">
      <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <span className="font-display font-bold text-gray-900 text-lg leading-none">
                Orange{" "}
                <em className="text-orange-500 not-italic italic">Dolphins</em>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-900"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4 shrink-0">
              <LanguageSwitcher className="hidden md:flex" />
              <Link
                href="/our-offer"
                className="hidden sm:inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
              >
                {t("shopNow")}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-4 space-y-0">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block py-3 text-sm font-medium border-b border-gray-50 transition-colors",
                    isActive(link.href)
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="pt-4 pb-1 flex items-center justify-between">
                <LanguageSwitcher />
                <Link
                  href="/our-offer"
                  onClick={() => setMobileOpen(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
                >
                  {t("shopNow")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
