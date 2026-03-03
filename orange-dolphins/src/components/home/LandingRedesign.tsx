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
    <div className="bg-[#f3f5ef]">
      <section className="relative overflow-hidden border-b border-darkGreen/10 bg-white px-6 pb-16 pt-16 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(30,76,236,0.12),transparent_34%),radial-gradient(circle_at_8%_92%,rgba(255,121,0,0.15),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[120px_1fr_430px] lg:items-center">
          <FadeReveal>
            <div className="hidden lg:flex lg:flex-col lg:gap-6">
              <span className="text-[11px] font-display font-bold uppercase tracking-[0.22em] text-darkGreen/65">Since</span>
              <span className="font-display text-5xl font-extrabold text-darkGreen">2024</span>
              <span className="h-24 w-px bg-darkGreen/20" />
              <span className="text-[11px] font-display font-bold uppercase tracking-[0.22em] text-orange-500">Leros</span>
            </div>
          </FadeReveal>

          <FadeReveal>
            <p className="mb-4 text-[11px] font-display font-bold uppercase tracking-[0.22em] text-darkGreen/65">Leros, Dodecanese</p>
            <h1
              className="font-display font-extrabold leading-[0.88] tracking-tight text-darkGreen"
              style={{ fontSize: "clamp(2.8rem,7.2vw,6.5rem)" }}
            >
              {hero("headlineLine1")}
              <br />
              {hero("headlineLine2")} <span className="text-orange-500">{hero("headlineAccent")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-darkGreen/75 sm:text-lg">{hero("subheadline")}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/our-offer"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-600"
              >
                {hero("cta")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-darkGreen/20 bg-white px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                {hero("ourStory")}
              </Link>
            </div>
          </FadeReveal>

          <FadeReveal delay={120}>
            <div className="relative mx-auto w-full max-w-[430px]">
              <div className="aspect-square rounded-full border-2 border-darkGreen/20 bg-white p-4 shadow-[0_24px_70px_rgba(73,95,24,0.14)]">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image src="/hero-section.jpg" fill priority className="object-cover object-center" alt="Sailboat on calm sea" sizes="430px" />
                </div>
              </div>
              <div className="absolute -left-10 top-8 rounded-xl border border-darkGreen/15 bg-white/90 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.15em] text-darkGreen/70">Boat-first</p>
                <p className="text-sm font-semibold text-darkGreen">We come to you</p>
              </div>
              <div className="absolute -bottom-4 right-4 rounded-xl border border-blue-500/20 bg-white/90 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.15em] text-blue-500">Slots</p>
                <p className="text-sm font-semibold text-darkGreen">09-11 / 17-19</p>
              </div>
            </div>
          </FadeReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <FadeReveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{vision("title")}</p>
              <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-darkGreen md:text-6xl">{vision("headline")}</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-darkGreen/70">{vision("body")}</p>
          </div>
        </FadeReveal>

        <div className="space-y-4">
          {pillars.map((pillar, i) => (
            <FadeReveal key={pillar.label} delay={i * 90}>
              <article className="grid overflow-hidden rounded-[1.5rem] border border-darkGreen/12 bg-white md:grid-cols-[120px_1.1fr_0.9fr] md:items-stretch">
                <div className="flex items-center justify-center border-b border-darkGreen/10 bg-grey-50 md:border-b-0 md:border-r">
                  <span className="py-4 font-display text-4xl font-extrabold text-darkGreen/28 md:py-0">0{i + 1}</span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/70">{pillar.label}</p>
                  <h3 className={`mt-2 font-display font-extrabold leading-[0.9] tracking-tight text-darkGreen ${i === 1 ? "text-[2.3rem]" : "text-[2.5rem]"}`}>
                    {pillar.headline1} {pillar.headline2}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-darkGreen/72">{pillar.body}</p>
                </div>
                <div className="relative aspect-[16/10] md:aspect-auto">
                  <Image
                    src={PILLAR_IMAGES[i] ?? "/boats.jpg"}
                    fill
                    className={`object-cover ${i === 1 ? "object-bottom" : i === 2 ? "object-[center_85%]" : "object-center"}`}
                    alt={pillar.label}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-darkGreen/10 bg-lightGreen/20 py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,121,0,0.14),transparent_36%),radial-gradient(circle_at_85%_75%,rgba(30,76,236,0.12),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 lg:grid-cols-[1fr_1fr]">
          <FadeReveal>
            <article className="h-full rounded-[1.6rem] border border-darkGreen/12 bg-white p-7 md:p-10">
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{mission("title")}</p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.8rem)] font-extrabold leading-[0.9] tracking-tight text-darkGreen">
                {mission("quoteLine1")}
                <br />
                <span className="text-blue-500">{mission("quoteLine2")}</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-darkGreen/74 sm:text-lg">{mission("body")}</p>
            </article>
          </FadeReveal>

          <FadeReveal delay={120}>
            <div className="grid h-full grid-cols-2 gap-5">
              <article className="col-span-2 overflow-hidden rounded-[1.5rem] border border-darkGreen/12 bg-white">
                <div className="relative aspect-[16/9] w-full">
                  <Image src="/friends.jpg" fill className="object-cover object-center" alt="Crew on board" sizes="(max-width:1024px) 100vw, 48vw" />
                </div>
              </article>
              <article className="overflow-hidden rounded-[1.2rem] border border-darkGreen/12 bg-white">
                <div className="relative aspect-square w-full">
                  <Image src="/Aegean_Sea_map.png" fill className="object-cover object-center" alt="Aegean map" sizes="240px" />
                </div>
              </article>
              <article className="overflow-hidden rounded-[1.2rem] border border-darkGreen/12 bg-white">
                <div className="relative aspect-square w-full">
                  <Image src="/brownie.webp" fill className="object-cover object-center" alt="Brownie" sizes="240px" />
                </div>
              </article>
            </div>
          </FadeReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <FadeReveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{stepsT("label")}</p>
              <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-darkGreen md:text-6xl">{stepsT("title")}</h2>
            </div>
            <Link
              href="/our-offer"
              className="inline-flex rounded-full border border-darkGreen/20 bg-white px-6 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-orange-500 hover:text-orange-500"
            >
              {stepsT("learnMore")}
            </Link>
          </div>
        </FadeReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeReveal key={step.number} delay={i * 90}>
              <article className={`h-full rounded-2xl border border-darkGreen/12 bg-white p-5 md:p-6 ${i % 2 === 1 ? "lg:mt-8" : ""}`}>
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-blue-500">{stepsT("stepLabel")} {i + 1}</p>
                <h3 className="mt-3 font-display text-3xl font-extrabold leading-[0.92] tracking-tight text-darkGreen">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-darkGreen/72">{step.description}</p>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <FadeReveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{categories("title")}</p>
              <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-darkGreen md:text-6xl">{categories("title")}</h2>
            </div>
            <Link
              href="/our-offer"
              className="inline-flex rounded-full border border-darkGreen/20 bg-white px-7 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-blue-500 hover:text-blue-500"
            >
              {categories("fullCatalogue")}
            </Link>
          </div>
        </FadeReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categoryItems.map((item, i) => (
            <FadeReveal key={item.name} delay={i * 70}>
              <article className="grid overflow-hidden rounded-[1.2rem] border border-darkGreen/12 bg-white sm:grid-cols-[220px_1fr]">
                <div className="relative aspect-[4/3] sm:aspect-auto">
                  <Image src={CATEGORY_IMAGES[i] ?? "/food-selection.jpg"} fill className="object-cover object-center" alt={item.name} sizes="220px" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[2rem] font-extrabold leading-[0.92] tracking-tight text-darkGreen">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-darkGreen/72">{item.description}</p>
                </div>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <FadeReveal>
          <div className="rounded-[2rem] border border-darkGreen/15 bg-gradient-to-br from-white via-white to-lightGreen/25 px-7 py-10 md:px-12 md:py-14">
            <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{cta("label")}</p>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,4.2rem)] font-extrabold leading-[0.9] tracking-tight text-darkGreen">
              {cta("title")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-darkGreen/75 sm:text-lg">{cta("subtitle")}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/our-offer"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-600"
              >
                {cta("button")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-darkGreen/20 bg-white px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-orange-500 hover:text-orange-500"
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
