import { defineRouting } from "next-intl/routing";
import { Locale } from "./locale";
import { getRequestConfig } from "next-intl/server";

const routing = defineRouting({
  locales: [Locale.en, Locale.ko],
  defaultLocale: Locale.en,
});

// this function runs on every server-side page request
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
