import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SOCIAL_URLS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/our-offer", key: "offer" },
  { href: "/partners", key: "partners" },
  { href: "/collaborate", key: "collaborate" },
  { href: "/contact", key: "contact" },
] as const;

export default function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="font-display font-bold text-gray-900 text-lg leading-none">
                Orange{" "}
                <em className="text-orange-500 not-italic italic">Dolphins</em>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              {tf("tagline")}
            </p>
            <div className="flex items-center gap-5 text-sm">
              <a
                href={SOCIAL_URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 font-medium transition-colors"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_URLS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 font-medium transition-colors"
              >
                Facebook
              </a>
              <a
                href={SOCIAL_URLS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 font-medium transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-6">
              {tf("pages")}
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-6">
              {tf("connect")}
            </p>
            <ul className="space-y-3 mb-8">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/collaborate"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Collaborate
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
            <Link
              href="/our-offer"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>
            © {new Date().getFullYear()} Orange Dolphins.{" "}
            {tf("rights")}
          </span>
          <span>Made with love in Leros, Greece</span>
        </div>
      </div>
    </footer>
  );
}
