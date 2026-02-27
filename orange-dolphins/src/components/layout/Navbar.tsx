"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "@/components/ui/Logo";

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
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      if (y > lastScrollY.current && y > 80) {
        // Scrolling down past 80px — hide the navbar
        setHidden(true);
      } else if (y < lastScrollY.current) {
        // Scrolling up — reveal the navbar
        setHidden(false);
      }
      lastScrollY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !mobileOpen;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <header
        className={cn(
          "w-full transition-all duration-300",
          transparent
            ? "bg-transparent border-transparent"
            : "bg-white/70 backdrop-blur-md border-b border-grey-100/60 shadow-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Logo
                variant={transparent ? "white" : "orange"}
                showWordmark
                showTagline={false}
                markSize={36}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-5 flex-1 justify-center whitespace-nowrap">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "font-display font-semibold uppercase tracking-[0.18em] text-[0.68rem] xl:text-[0.75rem] 2xl:text-xs transition-colors rounded-full px-3.5 py-2",
                    transparent
                      ? isActive(link.href)
                        ? "text-orange-500"
                        : "text-white/80 hover:text-white"
                      : isActive(link.href)
                      ? "bg-orange-500/10 text-orange-500"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-500/5"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4 shrink-0">
              <LanguageSwitcher className="hidden md:flex" transparent={transparent} />
              <Link
                href="/our-offer"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white font-display font-bold uppercase tracking-[0.2em] text-[0.7rem] xl:text-[0.78rem] px-6 py-2.5 transition-colors whitespace-nowrap"
              >
                {t("shopNow")}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-full transition-colors",
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-gray-600 hover:text-orange-500 bg-grey-50"
                )}
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
          <div className="lg:hidden border-t border-grey-100/60 bg-white/70 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-6 py-4 space-y-0">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block py-3 text-sm font-display font-semibold border-b border-grey-100 transition-colors",
                    isActive(link.href)
                      ? "text-orange-500"
                      : "text-gray-600 hover:text-orange-500"
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
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-display font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
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
