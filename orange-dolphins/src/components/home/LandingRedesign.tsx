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
    <div className="overflow-hidden bg-[#f6f4ee] text-darkGreen">
      <section className="relative isolate pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,121,0,0.18),transparent_42%),radial-gradient(circle_at_85%_10%,rgba(30,76,236,0.16),transparent_38%),linear-gradient(180deg,#f6f4ee_0%,#eef2e7_65%,#f6f4ee_100%)]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-20 md:pb-24 lg:grid-cols-12 lg:items-end">
          <FadeReveal className="lg:col-span-6">
            <p className="text-[11px] font-display font-bold uppercase tracking-[0.24em] text-darkGreen/70">Leros, Dodecanese</p>
            <h1 className="mt-6 font-display font-extrabold leading-[0.88] tracking-tight text-darkGreen" style={{ fontSize: "clamp(3rem, 9vw, 7.2rem)" }}>
              {hero("headlineLine1")}
              <br />
              {hero("headlineLine2")}
              <br />
              <span className="text-orange-500">{hero("headlineAccent")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-darkGreen/74 sm:text-lg">{hero("subheadline")}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/our-offer"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-600"
              >
                {hero("cta")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-darkGreen/20 bg-white/80 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                {hero("ourStory")}
              </Link>
            </div>
          </FadeReveal>

          <FadeReveal delay={120} className="lg:col-span-6 lg:pb-4">
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -inset-3 rounded-[44%_56%_52%_48%/45%_40%_60%_55%] bg-gradient-to-br from-orange-500/22 via-blue-500/14 to-darkGreen/20 blur-md" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[44%_56%_52%_48%/45%_40%_60%_55%] border border-white/70 shadow-[0_25px_60px_rgba(17,25,12,0.22)]">
                <Image src="/hero-section.jpg" fill priority className="object-cover object-center" alt="Aegean sailboat at sunset" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
            </div>
          </FadeReveal>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-10 md:pb-14">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categoryItems.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center rounded-full border border-darkGreen/14 bg-white/75 px-4 py-2 text-[0.66rem] font-display font-bold uppercase tracking-[0.14em] text-darkGreen/70 backdrop-blur"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="h-12 w-full bg-[radial-gradient(120%_100%_at_50%_0%,#e6ecd9_0%,#f6f4ee_72%)]" />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <FadeReveal>
          <p className="text-[11px] font-display font-bold uppercase tracking-[0.22em] text-orange-600">{vision("title")}</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,4.6rem)] font-extrabold leading-[0.92] tracking-tight text-darkGreen">
            {vision("headline")}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-darkGreen/74 sm:text-lg">{vision("body")}</p>
        </FadeReveal>

        <div className="mt-14 space-y-14">
          {pillars.map((pillar, i) => (
            <FadeReveal key={pillar.label} delay={i * 90}>
              <article
                className={`grid grid-cols-1 items-center gap-6 md:grid-cols-[160px_minmax(0,1fr)] md:gap-9 ${
                  i === 0 ? "pt-1" : "border-t border-darkGreen/12 pt-8 md:pt-10"
                }`}
              >
                <div>
                  <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border border-darkGreen/12 shadow-[0_14px_35px_rgba(20,28,12,0.18)] md:h-44 md:w-44">
                    <Image
                      src={PILLAR_IMAGES[i] ?? "/boats.jpg"}
                      fill
                      className={`object-cover ${i === 1 ? "object-bottom" : i === 2 ? "object-[center_85%]" : "object-center"}`}
                      alt={pillar.label}
                      sizes="176px"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/62">{pillar.label}</p>
                  <h3 className="mt-2 max-w-3xl font-display text-[clamp(1.9rem,3.4vw,3.1rem)] font-extrabold leading-[0.94] tracking-tight text-darkGreen">
                    {pillar.headline1} {pillar.headline2}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-darkGreen/72 md:text-base">{pillar.body}</p>
                </div>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-darkGreen" />
        <Image src="/friends.jpg" fill className="-z-10 object-cover object-center opacity-38" alt="Crew on sailboat" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-darkGreen/94 via-darkGreen/86 to-darkGreen/74" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-24 lg:grid-cols-12 lg:items-end">
          <FadeReveal className="lg:col-span-7">
            <div className="inline-block rounded-3xl border border-white/14 bg-black/22 px-5 py-5 backdrop-blur-sm md:px-7 md:py-7">
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-white/90">{mission("title")}</p>
              <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.2rem,5.4vw,5.2rem)] font-extrabold leading-[0.92] tracking-tight text-white">
                {mission("quoteLine1")}
                <br />
                <span className="text-orange-500">{mission("quoteLine2")}</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed !text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] sm:text-lg">
                {mission("body")}
              </p>
            </div>
          </FadeReveal>

          <FadeReveal delay={120} className="lg:col-span-5 lg:pb-1">
            <div className="rounded-[2rem] border border-white/26 bg-white/14 p-6 backdrop-blur-md">
              <p className="text-xs font-display font-bold uppercase tracking-[0.2em] text-lightGreen/95">{stepsT("label")}</p>
              <p className="mt-4 text-3xl font-display font-extrabold leading-[0.95] tracking-tight text-white">{stepsT("title")}</p>
              <Link
                href="/our-offer"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:bg-orange-500 hover:text-white"
              >
                {stepsT("learnMore")}
              </Link>
            </div>
          </FadeReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative pl-0 md:pl-8">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/70 via-orange-500/65 to-darkGreen/25 md:block" />
          <div className="space-y-9">
            {steps.map((step, i) => (
              <FadeReveal key={step.number} delay={i * 80}>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-[84px_1fr_1fr] md:gap-7">
                  <p className="font-display text-4xl font-extrabold leading-none text-blue-500 md:pl-3">{step.number}</p>
                  <h3 className="font-display text-[clamp(1.7rem,3vw,3rem)] font-extrabold leading-[0.92] tracking-tight text-darkGreen">{step.title}</h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-darkGreen/72 md:pt-1 md:text-base">{step.description}</p>
                </div>
              </FadeReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f6f4ee_0%,#e9efde_100%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <FadeReveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-600">{categories("title")}</p>
                <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-darkGreen md:text-6xl">{categories("title")}</h2>
              </div>
              <Link
                href="/our-offer"
                className="inline-flex rounded-full border border-darkGreen/25 bg-white/75 px-7 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-blue-500 hover:text-blue-500"
              >
                {categories("fullCatalogue")}
              </Link>
            </div>
          </FadeReveal>

          <div className="space-y-3">
            {categoryItems.map((item, i) => (
              <FadeReveal key={item.name} delay={i * 50}>
                <article className="group relative min-h-[165px] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={CATEGORY_IMAGES[i] ?? "/food-selection.jpg"}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    alt={item.name}
                    sizes="100vw"
                  />
                  <div className={`absolute inset-0 ${i % 2 === 0 ? "bg-gradient-to-r from-black/55 via-black/25 to-transparent" : "bg-gradient-to-l from-black/55 via-black/25 to-transparent"}`} />
                  <div className={`relative z-10 flex min-h-[165px] items-center p-5 md:p-8 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div className={`max-w-xl rounded-2xl border border-white/26 bg-white/12 px-5 py-4 backdrop-blur-md ${i % 2 === 0 ? "text-left" : "text-right"}`}>
                      <h3 className="font-display text-[2rem] font-extrabold leading-[0.9] tracking-tight text-white">{item.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/90">{item.description}</p>
                    </div>
                  </div>
                </article>
              </FadeReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:pt-20">
        <FadeReveal>
          <div className="relative overflow-hidden rounded-[2.2rem] border border-darkGreen/12 bg-white/80 px-8 py-14 backdrop-blur md:px-14 md:py-16">
            <div className="pointer-events-none absolute -left-14 top-0 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-blue-500/16 blur-3xl" />

            <p className="relative text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-600">{cta("label")}</p>
            <h2 className="relative mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,4.4rem)] font-extrabold leading-[0.9] tracking-tight text-darkGreen">
              {cta("title")}
            </h2>
            <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-darkGreen/74 sm:text-lg">{cta("subtitle")}</p>
            <div className="relative mt-9 flex flex-wrap gap-3">
              <Link
                href="/our-offer"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-600"
              >
                {cta("button")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-darkGreen/24 bg-white/80 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                {cta("getInTouch")}
              </Link>
            </div>
          </div>
        </FadeReveal>
      </section>
    </div>
  );
}
