"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FadeReveal } from "@/components/ui/FadeReveal";

const PILLAR_IMAGES = ["/boats.jpg", "/fresh-fish.jpg", "/food-selection.jpg"];
const CATEGORY_IMAGES = [
  "/food-selection.jpg",
  "/fresh-fish.jpg",
  "/bev.jpg",
  "/friends.jpg",
  "/bakery.jpg",
  "/brownie.webp",
];

export function LandingRedesign() {
  const hero = useTranslations("home.hero");
  const vision = useTranslations("home.vision");
  const mission = useTranslations("home.mission");
  const stepsT = useTranslations("home.howItWorks");
  const categories = useTranslations("home.categories");
  const cta = useTranslations("home.cta");

  const pillars = vision.raw("pillars") as Array<{
    label: string;
    headline1: string;
    headline2: string;
    body: string;
  }>;

  const steps = stepsT.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  const categoryItems = categories.raw("items") as Array<{
    name: string;
    description: string;
  }>;

  return (
    <div className="bg-[#f7f1e8] text-darkGreen">
      <section className="relative min-h-[90vh] overflow-hidden">
        <Image src="/hero-section.jpg" fill priority className="object-cover object-center" alt="Hero" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-black/40 to-black/62" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-end px-6 pb-20 pt-24">
          <FadeReveal className="max-w-4xl">
            <p className="mb-4 text-[11px] font-display font-bold uppercase tracking-[0.22em] text-white/80">Leros, Dodecanese</p>
            <h1
              className="font-display font-extrabold leading-[0.85] tracking-tight text-white [text-shadow:0_3px_16px_rgba(0,0,0,0.38)]"
              style={{ fontSize: "clamp(2.9rem, 8vw, 7.6rem)" }}
            >
              {hero("headlineLine1")}
              <br />
              {hero("headlineLine2")}
              <br />
              <span className="text-orange-500">{hero("headlineAccent")}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/86 sm:text-lg">
              {hero("subheadline")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/our-offer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-9 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-orange-600"
              >
                {hero("cta")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/45 px-9 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-lightGreen hover:text-lightGreen"
              >
                {hero("ourStory")}
              </Link>
            </div>
          </FadeReveal>
        </div>
      </section>

      <section className="border-y border-darkGreen/10 bg-[#fdf9f3]">
        <div className="animate-marquee flex min-w-max items-center gap-8 py-4">
          {[...categoryItems, ...categoryItems].map((item, i) => (
            <span key={`${item.name}-${i}`} className="inline-flex items-center gap-3 px-2 text-sm font-semibold text-darkGreen/75">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              {item.name}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <FadeReveal>
          <p className="text-[11px] font-display font-bold uppercase tracking-[0.22em] text-orange-600">{vision("title")}</p>
          <h2 className="mt-4 max-w-5xl font-display text-[clamp(2rem,5vw,4.8rem)] font-extrabold leading-[0.9] tracking-tight text-darkGreen">
            {vision("headline")}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-darkGreen/72 sm:text-lg">{vision("body")}</p>
        </FadeReveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeReveal key={pillar.label} delay={i * 90}>
              <article className="relative min-h-[520px] overflow-hidden">
                <Image
                  src={PILLAR_IMAGES[i] ?? "/boats.jpg"}
                  fill
                  className={`object-cover ${i === 1 ? "object-bottom" : i === 2 ? "object-[center_85%]" : "object-center"}`}
                  alt={pillar.label}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="max-w-[95%] rounded-2xl bg-black/42 p-4 text-white backdrop-blur-sm">
                    <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-lightGreen/90">{pillar.label}</p>
                    <h3 className={`mt-3 font-display font-extrabold leading-[0.9] tracking-tight ${i === 1 ? "text-[2.2rem]" : "text-[2.35rem]"}`}>
                      {pillar.headline1} {pillar.headline2}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/88">{pillar.body}</p>
                  </div>
                </div>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <FadeReveal>
          <div className="relative min-h-[560px] overflow-hidden bg-[#1f2b0d] px-6 py-14 text-white md:px-10 lg:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(154,172,110,0.24),transparent_32%),radial-gradient(circle_at_82%_78%,rgba(30,76,236,0.20),transparent_35%)]" />
            <div className="relative max-w-xl">
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-lightGreen/80">{mission("title")}</p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4.8vw,4.8rem)] font-extrabold leading-[0.9] tracking-tight">
                {mission("quoteLine1")}
                <br />
                <span className="text-orange-500">{mission("quoteLine2")}</span>
              </h2>
              <p className="mt-7 text-base leading-relaxed text-white/80 sm:text-lg">{mission("body")}</p>
            </div>
          </div>
        </FadeReveal>

        <FadeReveal delay={100}>
          <div className="relative min-h-[560px] overflow-hidden">
            <Image src="/friends.jpg" fill className="object-cover object-center" alt="Mission image" sizes="(max-width:1024px)100vw,50vw" />
          </div>
        </FadeReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <FadeReveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-600">{stepsT("label")}</p>
              <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-darkGreen md:text-6xl">{stepsT("title")}</h2>
            </div>
            <Link
              href="/our-offer"
              className="inline-flex rounded-full border border-darkGreen/20 px-6 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-blue-500 hover:text-blue-500"
            >
              {stepsT("learnMore")}
            </Link>
          </div>
        </FadeReveal>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <FadeReveal key={step.number} delay={i * 80}>
              <div className="grid grid-cols-[70px_1fr] gap-4 border-t border-darkGreen/14 pt-6 md:grid-cols-[90px_1fr_1fr] md:gap-8">
                <p className="font-display text-4xl font-extrabold leading-none text-blue-500">{step.number}</p>
                <h3 className="font-display text-3xl font-extrabold leading-[0.92] tracking-tight text-darkGreen">{step.title}</h3>
                <p className="text-sm leading-relaxed text-darkGreen/72 md:pt-1">{step.description}</p>
              </div>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="bg-[#22320f] py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <FadeReveal>
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-lightGreen/80">{categories("title")}</p>
                <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-6xl">{categories("title")}</h2>
              </div>
              <Link
                href="/our-offer"
                className="inline-flex rounded-full border border-white/40 px-7 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                {categories("fullCatalogue")}
              </Link>
            </div>
          </FadeReveal>

          <div className="space-y-2">
            {categoryItems.map((item, i) => (
              <FadeReveal key={item.name} delay={i * 65}>
                <article className="group relative min-h-[220px] overflow-hidden">
                  <Image src={CATEGORY_IMAGES[i] ?? "/food-selection.jpg"} fill className="object-cover object-center transition duration-500 group-hover:scale-[1.03]" alt={item.name} sizes="100vw" />
                  <div className={`absolute inset-0 ${i % 2 === 0 ? "bg-gradient-to-r from-black/72 via-black/38 to-transparent" : "bg-gradient-to-l from-black/72 via-black/38 to-transparent"}`} />
                  <div className={`relative z-10 flex min-h-[220px] items-end p-6 md:p-8 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div className={`max-w-xl rounded-2xl bg-black/40 px-4 py-3 backdrop-blur-sm ${i % 2 === 0 ? "text-left" : "text-right"}`}>
                      <h3 className="font-display text-[2.25rem] font-extrabold leading-[0.9] tracking-tight">{item.name}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/86">{item.description}</p>
                    </div>
                  </div>
                </article>
              </FadeReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <FadeReveal>
          <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-600">{cta("label")}</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,4.2rem)] font-extrabold leading-[0.9] tracking-tight text-darkGreen">{cta("title")}</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-darkGreen/74 sm:text-lg">{cta("subtitle")}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/our-offer"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-orange-600"
            >
              {cta("button")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-darkGreen/20 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-blue-500 hover:text-blue-500"
            >
              {cta("getInTouch")}
            </Link>
          </div>
        </FadeReveal>
      </section>
    </div>
  );
}
