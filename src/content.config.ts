// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string().optional(),
  date: z.string().optional(),
  subject: z.string().optional(),
});

const article = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/article',
  }),
  schema: articleSchema,
});

const article_en = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/article_en',
  }),
  schema: articleSchema,
});

export const collections = {
  article,
  article_en,
};