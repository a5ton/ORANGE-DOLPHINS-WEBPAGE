import { useTranslations } from "next-intl";
import { FadeReveal } from "@/components/ui/FadeReveal";

export function MissionStatement() {
  const t = useTranslations("home.mission");

  return (
    <section className="min-h-screen bg-orange-500 flex flex-col items-center justify-center text-center px-6 py-24">
      <FadeReveal>
        <span className="text-xs font-semibold tracking-widest uppercase text-orange-200 mb-8 block">
          Our Mission
        </span>
        <blockquote className="font-display font-black text-white text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight max-w-5xl italic">
          &ldquo;Fresh. Fast.<br />Wherever&nbsp;you float.&rdquo;
        </blockquote>
        <div className="mt-12 w-12 h-0.5 bg-orange-300 mx-auto" />
        <p className="mt-10 text-orange-100 text-xl leading-relaxed max-w-xl font-light">
          {t("body")}
        </p>
      </FadeReveal>
    </section>
  );
}
