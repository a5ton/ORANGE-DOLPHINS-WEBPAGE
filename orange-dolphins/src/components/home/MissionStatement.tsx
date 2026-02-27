import { useTranslations } from "next-intl";
import Image from "next/image";

export function MissionStatement() {
  const t = useTranslations("home.mission");

  return (
    <section className="bg-lightGreen pt-10 md:pt-14 pb-20 md:pb-28 rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Label + rule */}
        <div className="flex items-center gap-6 mb-12">
          <span className="text-xs font-display font-bold tracking-[0.22em] uppercase text-white/80 shrink-0">
            {t("title")}
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Two-column: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">

          {/* Left — quote + body */}
          <div className="relative flex flex-col justify-center">
            {/* Giant opening quotation mark */}
            <span
              className="absolute -top-4 -left-2 font-display font-extrabold text-white/30 leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(5rem, 8vw, 10rem)", lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote
              className="relative font-display font-extrabold text-white leading-[0.88] tracking-tight pt-12 lg:pt-14"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 5.5rem)" }}
            >
              {t("quoteLine1")}
              <br />
              {t("quoteLine2")}
            </blockquote>

            <p className="mt-10 text-white/75 text-base sm:text-lg leading-relaxed font-sans font-normal max-w-md">
              {t("body")}
            </p>
          </div>

          {/* Right — image (replace src with your actual image) */}
          <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/d178707d58e38b0d90bb9026956246fd.jpg"
              fill
              className="object-cover object-center"
              alt="Orange Dolphins — fresh provisions delivered to your boat"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
