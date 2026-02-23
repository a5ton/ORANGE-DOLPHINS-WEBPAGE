import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "el", "tr", "it"],
  defaultLocale: "en",
  localePrefix: "always",
});
