"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "@/components/ui/icons";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

interface ContactFormProps {
  defaultTopic?: string;
}

export function ContactForm({ defaultTopic }: ContactFormProps) {
  const t = useTranslations("contact.form");
  const tTopics = useTranslations("contact.topics");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { topic: defaultTopic || "" },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contact" }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full border-0 border-b bg-transparent px-0 py-3 text-darkGreen placeholder-darkGreen/30 outline-none transition-colors text-sm",
      hasError
        ? "border-red-400 focus:border-red-500"
        : "border-darkGreen/20 focus:border-orange-500"
    );

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <CheckCircleIcon className="h-10 w-10 text-orange-500" />
        <p className="font-display font-bold text-darkGreen text-xl">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs font-display font-bold tracking-[0.15em] uppercase text-darkGreen/50 mb-3">
            {t("name")} *
          </label>
          <input
            {...register("name")}
            placeholder="Your name"
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-display font-bold tracking-[0.15em] uppercase text-darkGreen/50 mb-3">
            {t("email")} *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-display font-bold tracking-[0.15em] uppercase text-darkGreen/50 mb-3">
          {t("topic")} *
        </label>
        <select
          {...register("topic")}
          defaultValue={defaultTopic || ""}
          className={cn(inputClass(!!errors.topic), "cursor-pointer appearance-none")}
        >
          <option value="" disabled>— select —</option>
          <option value="feedback">{tTopics("feedback")}</option>
          <option value="complaint">{tTopics("complaint")}</option>
          <option value="suggestion">{tTopics("suggestion")}</option>
          <option value="general">{tTopics("general")}</option>
        </select>
        {errors.topic && (
          <p className="mt-1.5 text-xs text-red-500">{errors.topic.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-display font-bold tracking-[0.15em] uppercase text-darkGreen/50 mb-3">
          {t("message")} *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Write your message here…"
          className={cn(inputClass(!!errors.message), "resize-none")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">{t("error")}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-display font-bold text-[0.7rem] tracking-[0.18em] uppercase px-10 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : t("submit")}
      </button>
    </form>
  );
}
