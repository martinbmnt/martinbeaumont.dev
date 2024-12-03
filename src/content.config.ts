import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  project: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/project" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      excerpt: z.string(),
      site: z.string().optional(),
      technologies: z.array(z.string()),
      services: z.array(z.string()),
      publishDate: z.date(),
      updateDate: z.date().optional(),
      releaseYear: z.number().or(z.string()),
      cover: z.object({
        src: image(),
        alt: z.string(),
        seo: image(),
      }),
      review: z.optional(z.object({
        author: z.string(),
        content: z.string(),
        link: z.string().optional(),
      })),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    })
  }),
  technology: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/technology" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      logo: z.object({
        src: image(),
        width: z.number(),
        height: z.number(),
      }),
      description: z.string(),
      site: z.string(),
      publishDate: z.date(),
      draft: z.boolean().default(false),
    })
  }),
};
