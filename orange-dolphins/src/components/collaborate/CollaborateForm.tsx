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
      "w-full border-0 border-b bg-transparent px-0 py-3 text-darkGreen placeholder-darkGreen/30 outline-none transition-colors text-sm",
      hasError
        ? "border-red-400 focus:border-red-500"
        : "border-darkGreen/20 focus:border-orange-500"
    );

  return (
    <section className="bg-grey-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: editorial heading */}
          <div className="lg:pt-2">
            <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-orange-500 mb-6 block">
              {t("title")}
            </span>
            <h2
              className="font-display font-extrabold text-darkGreen leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t("title")}
            </h2>
            <div className="mt-8 w-12 h-px bg-orange-500" />
            <p className="mt-8 text-darkGreen/60 text-lg font-sans font-normal leading-relaxed max-w-sm">
              {t("subtitle")}
            </p>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <CheckCircleIcon className="h-10 w-10 text-orange-500" />
                <p className="font-display font-bold text-darkGreen text-xl">{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-display font-bold tracking-[0.15em] uppercase text-darkGreen/50 mb-3">
                      {t("name")} *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Inna Smirnova"
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
                      placeholder="inna@example.com"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-bold tracking-[0.15em] uppercase text-darkGreen/50 mb-3">
                    {t("organization")}
                  </label>
                  <input
                    {...register("organization")}
                    placeholder="My Charter Company"
                    className={inputClass(false)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-display font-bold tracking-[0.15em] uppercase text-darkGreen/50 mb-3">
                    {t("category")} *
                  </label>
                  <select
                    {...register("category")}
                    defaultValue=""
                    className={cn(inputClass(!!errors.category), "cursor-pointer appearance-none")}
                  >
                    <option value="" disabled>— select —</option>
                    <option value="charter">{t("categoryOptions.charter")}</option>
                    <option value="marina">{t("categoryOptions.marina")}</option>
                    <option value="business">{t("categoryOptions.business")}</option>
                    <option value="rider">{t("categoryOptions.rider")}</option>
                    <option value="other">{t("categoryOptions.other")}</option>
                  </select>
                  {errors.category && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.category.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-display font-bold tracking-[0.15em] uppercase text-darkGreen/50 mb-3">
                    {t("message")} *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about yourself and how you'd like to collaborate..."
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
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-display font-bold text-[0.7rem] tracking-[0.18em] uppercase px-10 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending…" : t("submit")}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
