import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { formatIssueDate, parseDailyIssue } from "../../lib/content";

export async function GET(context) {
  const issues = (await getCollection("dailyNews"))
    .map(parseDailyIssue)
    .filter((issue) => issue.lang === "en")
    .sort((a, b) => b.date.localeCompare(a.date));

  return rss({
    title: "Aperio — English",
    description: "Daily signals and writing from Aperio.",
    site: context.site,
    items: issues.map((issue) => ({
      title: `Horizon Daily · ${formatIssueDate(issue.date, "en")}`,
      description: "Daily technology signals selected and organized by Horizon.",
      pubDate: new Date(`${issue.date}T00:00:00Z`),
      link: `/en/news/${issue.date}/`
    }))
  });
}
