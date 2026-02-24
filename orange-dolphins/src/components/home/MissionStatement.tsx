import { useTranslations } from "next-intl";

const REPEAT = "ORANGE DOLPHINS  ";
const ROW = REPEAT.repeat(12);
const ROWS = Array.from({ length: 30 });

export function MissionStatement() {
  const t = useTranslations("home.mission");

  return (
    <section className="h-screen bg-darkGreen flex flex-col items-center justify-center text-center px-6 sm:px-10 overflow-hidden relative">
      {/* Repeating background text — very subtle */}
      <div
        className="absolute inset-0 flex flex-col select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {ROWS.map((_, i) => (
          <p
            key={i}
            className="font-display font-extrabold text-white/[0.012] whitespace-nowrap leading-none"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 4rem)",
              transform: i % 2 === 1 ? "translateX(-6rem)" : undefined,
            }}
          >
            {ROW}
          </p>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-10 block">
          Our Mission
        </span>

        {/* The headline — fluid type that fills the viewport */}
        <blockquote
          className="font-display font-extrabold text-white leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}
        >
          &ldquo;Fresh. Fast.
          <br />
          Wherever&nbsp;you float.&rdquo;
        </blockquote>

        <div className="mt-10 w-16 h-px bg-orange-500" />

        <p className="mt-10 text-lightGreen text-lg sm:text-xl leading-relaxed max-w-lg font-sans font-normal">
          {t("body")}
        </p>
      </div>
    </section>
  );
}
