import { useTranslations } from "next-intl";
import Image from "next/image";

export function MissionStatement() {
  const t = useTranslations("home.mission");

  return (
    <section className="bg-grey-100 rounded-3xl overflow-hidden">

      {/* Padded content — text + desktop image */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-14 md:pt-16 pb-14 lg:pb-28">

        {/* Label + rule */}
        <div className="flex items-center gap-6 mb-12">
          <span className="text-xs font-display font-bold tracking-[0.22em] uppercase text-orange-500 shrink-0">
            {t("title")}
          </span>
          <div className="flex-1 h-px bg-darkGreen/10" />
        </div>

        {/* Two-column on desktop, single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">

          {/* Left — quote + body */}
          <div className="relative flex flex-col justify-center">
            <span
              className="absolute -top-4 -left-2 font-display font-extrabold text-orange-500 leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(5rem, 8vw, 10rem)", lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote
              className="relative font-display font-extrabold text-darkGreen leading-[0.88] tracking-tight pt-12 lg:pt-14"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 5.5rem)" }}
            >
              {t("quoteLine1")}
              <br />
              {t("quoteLine2")}
            </blockquote>
            <p className="mt-10 text-darkGreen/60 text-base sm:text-lg leading-relaxed font-sans font-normal max-w-md">
              {t("body")}
            </p>
          </div>

          {/* Right — desktop image with rounded corners */}
          <div className="hidden lg:block relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/hero-boat.jpg"
              fill
              className="object-cover object-center"
              alt="Orange Dolphins — fresh provisions delivered to your boat"
              sizes="50vw"
            />
          </div>

        </div>
      </div>

      {/* Mobile-only full-bleed image — outside padded container, flush to section edges */}
      <div className="lg:hidden relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
        <Image
          src="/hero-boat.jpg"
          fill
          className="object-cover object-center"
          alt="Orange Dolphins — fresh provisions delivered to your boat"
          sizes="100vw"
        />
      </div>

    </section>
  );
}
