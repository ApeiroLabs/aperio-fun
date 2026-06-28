import type { CollectionEntry } from "astro:content";

export type SiteLanguage = "zh" | "en";

export interface DailyIssue {
  entry: CollectionEntry<"dailyNews">;
  date: string;
  lang: SiteLanguage;
}

export function parseDailyIssue(entry: CollectionEntry<"dailyNews">): DailyIssue {
  const match = entry.id.match(/^horizon-(\d{4}-\d{2}-\d{2})-(zh|en)$/);

  if (!match) {
    throw new Error(`Unexpected Horizon filename: ${entry.id}`);
  }

  return {
    entry,
    date: match[1],
    lang: match[2] as SiteLanguage
  };
}

export function formatIssueDate(date: string, lang: SiteLanguage = "zh") {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(
    lang === "zh" ? "zh-CN" : "en-US",
    {
      year: "numeric",
      month: lang === "zh" ? "long" : "short",
      day: "numeric",
      timeZone: "UTC"
    }
  );
}

export function inspirationDate(entry: CollectionEntry<"inspiration">) {
  const match = entry.id.match(/^(\d{4}-\d{2}-\d{2})/);
  return match?.[1] ?? "1970-01-01";
}
