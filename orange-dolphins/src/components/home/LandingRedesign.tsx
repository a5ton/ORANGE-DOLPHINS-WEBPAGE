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
    <div className="bg-grey-100 text-darkGreen">
      <section className="relative overflow-hidden">
        <Image
          src="/hero-section.jpg"
          fill
          priority
          className="object-cover object-center"
          alt="Orange Dolphins hero background"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-darkGreen/92 via-darkGreen/78 to-darkGreen/48" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(154,172,110,0.36),transparent_34%),radial-gradient(circle_at_90%_18%,rgba(255,121,0,0.18),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl grid-cols-1 px-6 pb-14 pt-24 lg:items-end">
          <FadeReveal>
            <p className="mb-4 text-[11px] font-display font-bold uppercase tracking-[0.2em] text-white/80">Leros, Dodecanese</p>
            <h1
              className="font-display font-extrabold leading-[0.9] tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.35)]"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6.2rem)" }}
            >
              {hero("headlineLine1")}
              <br />
              {hero("headlineLine2")}
              <br />
              <span className="text-orange-500">{hero("headlineAccent")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.3)] sm:text-lg">{hero("subheadline")}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/our-offer"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-600"
              >
                {hero("cta")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm transition-colors hover:border-white hover:text-white"
              >
                {hero("ourStory")}
              </Link>
            </div>
          </FadeReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <FadeReveal>
          <div className="grid grid-cols-1 gap-4 rounded-[1.6rem] border border-darkGreen/12 bg-white p-6 md:grid-cols-[1fr_auto] md:items-end md:p-9">
            <div>
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/65">{vision("title")}</p>
              <h2 className="mt-3 font-display text-[clamp(2rem,5vw,4.4rem)] font-extrabold leading-[0.9] tracking-tight text-darkGreen">
                {vision("headline")}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-darkGreen/72 sm:text-lg">{vision("body")}</p>
            </div>
            <div className="hidden md:flex md:flex-col md:items-end">
              <span className="rounded-full bg-lightGreen/30 px-4 py-1 text-xs font-semibold text-darkGreen">Wholesome delivery</span>
              <span className="mt-2 rounded-full bg-orange-500/12 px-4 py-1 text-xs font-semibold text-orange-600">Island-first sourcing</span>
            </div>
          </div>
        </FadeReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeReveal key={pillar.label} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-darkGreen/12 bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={PILLAR_IMAGES[i] ?? "/boats.jpg"}
                    fill
                    className={`object-cover ${i === 1 ? "object-bottom" : i === 2 ? "object-[center_85%]" : "object-center"}`}
                    alt={pillar.label}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex-1 p-6">
                  <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/65">{pillar.label}</p>
                  <h3 className={`mt-2 font-display font-extrabold leading-[0.9] tracking-tight text-darkGreen ${i === 1 ? "text-[2.2rem]" : "text-[2.4rem]"}`}>
                    {pillar.headline1} {pillar.headline2}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-darkGreen/72">{pillar.body}</p>
                </div>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="bg-lightGreen/35 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeReveal>
            <article className="h-full rounded-[1.5rem] border border-darkGreen/12 bg-white p-7 md:p-10">
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/65">{mission("title")}</p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.8vw,4.7rem)] font-extrabold leading-[0.9] tracking-tight text-darkGreen">
                {mission("quoteLine1")}
                <br />
                <span className="text-orange-500">{mission("quoteLine2")}</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-darkGreen/74 sm:text-lg">{mission("body")}</p>
            </article>
          </FadeReveal>

          <FadeReveal delay={110}>
            <article className="overflow-hidden rounded-[1.5rem] border border-darkGreen/12 bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/friends.jpg" fill className="object-cover object-center" alt="Friends enjoying food on a boat" sizes="(max-width:1024px)100vw,40vw" />
              </div>
            </article>
          </FadeReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <FadeReveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/65">{stepsT("label")}</p>
              <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-darkGreen md:text-6xl">{stepsT("title")}</h2>
            </div>
            <Link
              href="/our-offer"
              className="inline-flex rounded-full border border-darkGreen/20 bg-white px-6 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-blue-500 hover:text-blue-500"
            >
              {stepsT("learnMore")}
            </Link>
          </div>
        </FadeReveal>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="pointer-events-none absolute left-4 right-4 top-8 hidden h-[2px] bg-gradient-to-r from-darkGreen/25 via-lightGreen to-darkGreen/25 md:block" />
          {steps.map((step, i) => (
            <FadeReveal key={step.number} delay={i * 80}>
              <article className="relative h-full rounded-xl border border-darkGreen/12 bg-white p-5 md:p-6">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-darkGreen text-sm font-display font-bold text-white">
                  {step.number}
                </span>
                <h3 className="font-display text-3xl font-extrabold leading-[0.92] tracking-tight text-darkGreen">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-darkGreen/72">{step.description}</p>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <FadeReveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-darkGreen/65">{categories("title")}</p>
              <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-darkGreen md:text-6xl">{categories("title")}</h2>
            </div>
            <Link
              href="/our-offer"
              className="inline-flex rounded-full border border-darkGreen/20 bg-white px-7 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:border-orange-500 hover:text-orange-500"
            >
              {categories("fullCatalogue")}
            </Link>
          </div>
        </FadeReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map((item, i) => (
            <FadeReveal key={item.name} delay={i * 70}>
              <article className="overflow-hidden rounded-[1.2rem] border border-darkGreen/12 bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={CATEGORY_IMAGES[i] ?? "/food-selection.jpg"} fill className="object-cover object-center" alt={item.name} sizes="(max-width:768px)100vw,33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="font-display text-[1.95rem] font-extrabold leading-[0.9] tracking-tight">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{item.description}</p>
                  </div>
                </div>
              </article>
            </FadeReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <FadeReveal>
          <div className="rounded-[2rem] border border-darkGreen/15 bg-darkGreen px-7 py-10 text-white md:px-12 md:py-14">
            <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-lightGreen/80">{cta("label")}</p>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,4.2rem)] font-extrabold leading-[0.9] tracking-tight">
              {cta("title")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{cta("subtitle")}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/our-offer"
                className="inline-flex items-center justify-center rounded-full bg-lightGreen px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-darkGreen transition-colors hover:bg-lightGreen/90"
              >
                {cta("button")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-8 py-3 text-[0.72rem] font-display font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-orange-500 hover:text-orange-500"
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
