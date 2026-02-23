import { useTranslations } from "next-intl";

export function MissionStatement() {
  const t = useTranslations("home.mission");

  return (
    <section className="h-screen bg-orange-500 flex flex-col items-center justify-center text-center px-6 sm:px-10 overflow-hidden relative">
      {/* Faint background word — adds depth without distraction */}
      <span
        className="absolute inset-0 flex items-center justify-center font-display font-black italic text-white/[0.04] select-none pointer-events-none leading-none overflow-hidden"
        style={{ fontSize: "22vw" }}
        aria-hidden="true"
      >
        DOLPHINS
      </span>

      <div className="relative z-10 flex flex-col items-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-200 mb-10 block">
          Our Mission
        </span>

        {/* The headline — fluid type that fills the viewport */}
        <blockquote
          className="font-display font-black italic text-white leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}
        >
          &ldquo;Fresh. Fast.
          <br />
          Wherever&nbsp;you float.&rdquo;
        </blockquote>

        <div className="mt-10 w-16 h-px bg-orange-300" />

        <p className="mt-10 text-orange-100 text-lg sm:text-xl leading-relaxed max-w-lg font-light">
          {t("body")}
        </p>
      </div>
    </section>
  );
}
