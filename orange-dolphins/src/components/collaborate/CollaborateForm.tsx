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
  organization: z.string().optional(),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function CollaborateForm() {
  const t = useTranslations("collaborate.form");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "collaborate" }),
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
      "w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all",
      hasError
        ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-gray-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
    );

  return (
    <section className="py-16 md:py-24 bg-sand-100">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-ocean-900 text-3xl md:text-4xl mb-3">
            {t("title")}
          </h2>
          <p className="text-gray-500">{t("subtitle")}</p>
        </div>

        {status === "success" ? (
          <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircleIcon className="h-12 w-12 text-green-500" />
            </div>
            <p className="text-green-800 font-semibold text-lg">{t("success")}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("name")} *
                </label>
                <input
                  {...register("name")}
                  placeholder="Inna Smirnova"
                  className={inputClass(!!errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("email")} *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="inna@example.com"
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("organization")}
              </label>
              <input
                {...register("organization")}
                placeholder="My Charter Company"
                className={inputClass(false)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("category")} *
              </label>
              <select
                {...register("category")}
                className={cn(inputClass(!!errors.category), "cursor-pointer")}
                defaultValue=""
              >
                <option value="" disabled>
                  — select —
                </option>
                <option value="charter">{t("categoryOptions.charter")}</option>
                <option value="marina">{t("categoryOptions.marina")}</option>
                <option value="business">{t("categoryOptions.business")}</option>
                <option value="rider">{t("categoryOptions.rider")}</option>
                <option value="other">{t("categoryOptions.other")}</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("message")} *
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us about yourself and how you'd like to collaborate..."
                className={inputClass(!!errors.message)}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500 text-center">{t("error")}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm py-4 transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : t("submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
