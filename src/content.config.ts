// src/content.config.ts
import { defineCollection, z } from 'astro:content';
// 💡 Astro 5+ 新增的 glob 讀取器
import { glob } from 'astro/loaders';

const articleCollection = defineCollection({
  // 🎯 Astro 5+ 新寫法：指定去哪裡抓 Markdown 檔案
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/article" }),
  schema: z.object({
    title: z.string().optional(),
    date: z.string().optional(),
    subject: z.string().optional(),
  }),
});

export const collections = {
  'article': articleCollection,
};