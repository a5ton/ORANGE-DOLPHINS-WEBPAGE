"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/ui/ContactForm";
import { SOCIAL_URLS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  EnvelopeIcon,
  ChatBubbleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  InboxIcon,
} from "@/components/ui/icons";
import { ComponentType, SVGProps } from "react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIAL_CONFIG = [
  {
    key: "instagram" as const,
    href: SOCIAL_URLS.instagram,
    icon: InstagramIcon,
    color: "hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600",
  },
  {
    key: "facebook" as const,
    href: SOCIAL_URLS.facebook,
    icon: FacebookIcon,
    color: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600",
  },
  {
    key: "linkedin" as const,
    href: SOCIAL_URLS.linkedin,
    icon: LinkedInIcon,
    color: "hover:bg-sky-50 hover:border-sky-200 hover:text-sky-600",
  },
];

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
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <EnvelopeIcon className="h-16 w-16 text-ocean-300" />
          </div>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-ocean-100 text-xl">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* Topic selector */}
      <section className="py-12 bg-sand-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-center font-semibold text-ocean-900 mb-6">
            {t("topics.title")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic) => (
              <button
                key={topic.key}
                onClick={() =>
                  setSelectedTopic(
                    selectedTopic === topic.key ? "" : topic.key
                  )
                }
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border-2 transition-all duration-200",
                  selectedTopic === topic.key
                    ? "bg-orange-500 border-orange-500 text-white shadow-md"
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
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-ocean-900 text-2xl mb-8">
            {t("social.title")}
          </h2>
          <div className="flex justify-center gap-4">
            {SOCIAL_CONFIG.map(({ key, href, icon: Icon, color }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-gray-100 text-gray-500 transition-all duration-200 min-w-[100px]",
                  color
                )}
                aria-label={t(`social.${key}`)}
              >
                <Icon />
                <span className="text-sm font-semibold">{t(`social.${key}`)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 md:py-24 bg-sand-100">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-3">
              {t("form.title")}
            </h2>
          </div>
          <ContactForm defaultTopic={selectedTopic} />
        </div>
      </section>
    </>
  );
}
