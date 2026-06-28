export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export const localeMeta = {
  zh: {
    htmlLang: "zh-CN",
    label: "中文",
    shortLabel: "中",
    prefix: "",
    rss: "/rss.xml"
  },
  en: {
    htmlLang: "en",
    label: "English",
    shortLabel: "EN",
    prefix: "/en",
    rss: "/en/rss.xml"
  }
} as const;

export function localizedPath(locale: Locale, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return normalized === "/" ? "/en/" : `/en${normalized}`;
}

export function contentLocaleFromId(id: string): Locale {
  return /(?:^|-)en$/.test(id) ? "en" : "zh";
}
