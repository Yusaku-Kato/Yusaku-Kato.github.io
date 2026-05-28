// src/content.config.ts
// Astro v6 Content Collections 設定（glob loader を使用）
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(["journal", "conference", "workshop", "preprint", "other"]),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    slides: z.string().optional(),
    bibtex: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    role: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    link: z.string().optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.date(),
    location: z.string().optional(),
    slides: z.string().optional(),
    video: z.string().optional(),
    abstract: z.string().optional(),
  }),
});

export const collections = { publications, projects, news, talks };
