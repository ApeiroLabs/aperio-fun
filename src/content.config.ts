import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    lang: z.enum(["zh", "en"]).default("zh"),
    tags: z.array(z.string()).default([])
  })
});

const dailyNews = defineCollection({
  loader: glob({
    pattern: "horizon-*.md",
    base: "./content-inbox/daily-news"
  })
});

const inspiration = defineCollection({
  loader: glob({
    pattern: "20*.md",
    base: "./content-inbox/inspiration"
  })
});

export const collections = { blog, dailyNews, inspiration };
