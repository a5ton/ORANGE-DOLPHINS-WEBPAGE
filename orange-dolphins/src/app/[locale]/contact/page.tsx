import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/ui/ContactForm";
import { SOCIAL_URLS } from "@/lib/constants";
import { FadeReveal } from "@/components/ui/FadeReveal";

const SOCIALS = [
  { label: "Instagram", href: SOCIAL_URLS.instagram },
  { label: "Facebook", href: SOCIAL_URLS.facebook },
  { label: "LinkedIn", href: SOCIAL_URLS.linkedin },
];

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      {/* Hero */}
      <section className="bg-orange-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <FadeReveal className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-display font-bold tracking-[0.2em] uppercase text-white/60 mb-6">
            Get in Touch
          </p>
          <h1
            className="font-display font-extrabold text-white leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            {t("hero.title")}
          </h1>
          <div className="mt-8 w-12 h-px bg-white/40" />
          <p className="mt-8 text-white/80 text-lg sm:text-xl max-w-xl font-sans font-normal leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </FadeReveal>
      </section>

      {/* Main: social links + form */}
      <section className="bg-grey-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: find us online */}
            <div className="lg:pt-2">
              <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-8 block">
                {t("social.title")}
              </span>
              <div className="space-y-2">
                {SOCIALS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-display font-extrabold text-darkGreen leading-none hover:text-orange-500 transition-colors duration-200"
                    style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="mt-10 w-12 h-px bg-orange-500" />
              <p className="mt-8 text-darkGreen/55 text-base font-sans leading-relaxed max-w-xs">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Right: form */}
            <div>
              <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-8 block">
                {t("form.title")}
              </span>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
