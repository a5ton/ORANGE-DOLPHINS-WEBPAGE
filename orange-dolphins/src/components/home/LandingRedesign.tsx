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
    <div className="bg-grey-100">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-grey-100 to-lightGreen/18" />
        <div className="pointer-events-none absolute -left-20 top-16 h-52 w-52 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-8 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-12 pt-16 md:pt-20 lg:grid-cols-[1.12fr_1fr] lg:items-center lg:gap-14 lg:pb-16">
          <FadeReveal>
            <p className="mb-4 text-[11px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/70">
              Leros, Dodecanese
            </p>
            <h1
              className="font-display font-extrabold leading-[0.9] tracking-tight text-darkGreen"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6.2rem)" }}
            >
              {hero("headlineLine1")}
              <br />
              {hero("headlineLine2")}
              <br />
              <span className="text-orange-500">{hero("headlineAccent")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-darkGreen/75 sm:text-lg">
              {hero("subheadline")}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/our-offer"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-600"
              >
                {hero("cta")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-darkGreen/20 bg-white px-7 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                {hero("ourStory")}
              </Link>
            </div>
          </FadeReveal>

          <FadeReveal delay={120}>
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-darkGreen/10 bg-white p-3 shadow-[0_20px_55px_rgba(73,95,24,0.10)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/hero-section.jpg"
                  fill
                  priority
                  className="object-cover object-center"
                  alt="Orange Dolphins at sea"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </FadeReveal>
        </div>
      </section>

      <div className="h-10 bg-gradient-to-b from-lightGreen/14 via-grey-100/90 to-grey-100" />

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <FadeReveal>
          <div className="rounded-[1.8rem] border border-darkGreen/10 bg-white p-8 md:p-12">
            <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{vision("title")}</p>
            <h2
              className="mt-4 max-w-4xl font-display font-extrabold leading-[0.92] tracking-tight text-darkGreen"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              {vision("headline")}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-darkGreen/70 sm:text-lg">{vision("body")}</p>
          </div>
        </FadeReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:pb-14">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeReveal key={pillar.label} delay={i * 110} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-darkGreen/10 bg-white">
                <div className="relative aspect-[5/3] w-full">
                  <Image
                    src={PILLAR_IMAGES[i] ?? "/boats.jpg"}
                    fill
                    className={`object-cover ${i === 1 ? "object-bottom" : i === 2 ? "object-[center_85%]" : "object-center"}`}
                    alt={`${pillar.headline1} ${pillar.headline2}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex-1 p-6">
                  <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/75">{pillar.label}</p>
                  <h3 className={`mt-3 font-display font-extrabold leading-[0.92] tracking-tight text-darkGreen ${i === 1 ? "text-3xl" : "text-[2.35rem]"}`}>
                    {pillar.headline1} {pillar.headline2}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-darkGreen/70">{pillar.body}</p>
                </div>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="bg-lightGreen/18">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-14 md:py-16 lg:grid-cols-2 lg:items-center">
          <FadeReveal>
            <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{mission("title")}</p>
            <h2
              className="mt-4 font-display font-extrabold leading-[0.92] tracking-tight text-darkGreen"
              style={{ fontSize: "clamp(2.2rem, 4.8vw, 4.8rem)" }}
            >
              {mission("quoteLine1")}
              <br />
              <span className="text-blue-500">{mission("quoteLine2")}</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-darkGreen/75 sm:text-lg">{mission("body")}</p>
          </FadeReveal>
          <FadeReveal delay={120}>
            <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-darkGreen/10 bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/friends.jpg"
                  fill
                  className="object-cover object-center"
                  alt="Orange Dolphins crew"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </FadeReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <FadeReveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{stepsT("label")}</p>
              <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-darkGreen md:text-6xl">{stepsT("title")}</h2>
            </div>
            <Link
              href="/our-offer"
              className="inline-flex rounded-full border border-darkGreen/20 bg-white px-6 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-orange-500 hover:text-orange-500"
            >
              {stepsT("learnMore")}
            </Link>
          </div>
        </FadeReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {steps.map((step, i) => (
            <FadeReveal key={step.number} delay={i * 100}>
              <article className="rounded-[1.2rem] border border-darkGreen/10 bg-white p-6 md:p-7">
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-blue-500">
                  {stepsT("stepLabel")} {i + 1}
                </p>
                <h3 className="mt-4 font-display text-3xl font-extrabold leading-[0.92] tracking-tight text-darkGreen">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-darkGreen/70">{step.description}</p>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-16">
        <div className="rounded-[2rem] border border-darkGreen/10 bg-white px-6 py-10 md:px-9 md:py-12">
          <FadeReveal>
            <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{categories("title")}</p>
                <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-darkGreen md:text-6xl">
                  {categories("title")}
                </h2>
              </div>
              <Link
                href="/our-offer"
                className="inline-flex rounded-full border border-darkGreen/20 px-7 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-blue-500 hover:text-blue-500"
              >
                {categories("fullCatalogue")}
              </Link>
            </div>
          </FadeReveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categoryItems.map((item, i) => (
              <FadeReveal key={item.name} delay={i * 70}>
                <article className="overflow-hidden rounded-[1.1rem] border border-darkGreen/10 bg-grey-50">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={CATEGORY_IMAGES[i] ?? "/food-selection.jpg"}
                      fill
                      className="object-cover object-center"
                      alt={item.name}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[2rem] font-extrabold leading-[0.92] tracking-tight text-darkGreen">{item.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-darkGreen/72">{item.description}</p>
                  </div>
                </article>
              </FadeReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-20">
        <FadeReveal>
          <div className="rounded-[2rem] border border-darkGreen/15 bg-lightGreen/20 px-7 py-10 md:px-12 md:py-14">
            <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-orange-500">{cta("label")}</p>
            <h2
              className="mt-4 max-w-4xl font-display font-extrabold leading-[0.92] tracking-tight text-darkGreen"
              style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)" }}
            >
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
