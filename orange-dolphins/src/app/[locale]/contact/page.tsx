"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeReveal } from "@/components/ui/FadeReveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { SOCIAL_URLS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  ChatBubbleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  InboxIcon,
} from "@/components/ui/icons";
import { ComponentType, SVGProps } from "react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  const topics: Array<{
    key: string;
    label: string;
    Icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
  }> = [
    { key: "feedback", label: t("topics.feedback"), Icon: ChatBubbleIcon },
    { key: "complaint", label: t("topics.complaint"), Icon: ExclamationTriangleIcon },
    { key: "suggestion", label: t("topics.suggestion"), Icon: LightBulbIcon },
    { key: "general", label: t("topics.general"), Icon: InboxIcon },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100 pt-20 pb-16">
        <FadeReveal className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-6">
            Get in Touch
          </p>
          <h1
            className="font-display font-black italic text-gray-900 leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-gray-400 text-xl max-w-xl font-light">
            {t("hero.subtitle")}
          </p>
        </FadeReveal>
      </section>

      {/* Topic selector */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-8">
            {t("topics.title")}
          </p>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <button
                key={topic.key}
                onClick={() =>
                  setSelectedTopic(
                    selectedTopic === topic.key ? "" : topic.key
                  )
                }
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border transition-all duration-200",
                  selectedTopic === topic.key
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600"
                )}
              >
                <topic.Icon className="h-4 w-4" />
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="py-16 bg-cream-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-8">
            {t("social.title")}
          </p>
          <div className="flex gap-8">
            <a
              href={SOCIAL_URLS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_URLS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors"
            >
              Facebook
            </a>
            <a
              href={SOCIAL_URLS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-2xl px-6">
          <FadeReveal>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-4">
              Send a Message
            </p>
            <h2
              className="font-display font-black italic text-gray-900 leading-[0.9] tracking-tight mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {t("form.title")}
            </h2>
          </FadeReveal>
          <ContactForm defaultTopic={selectedTopic} />
        </div>
      </section>
    </>
  );
}
