import { z, defineCollection } from 'astro:content';

export const collections = {
  project: defineCollection({
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      site: z.string(),
      technologies: z.array(z.string()),
      services: z.array(z.string()),
      publishDate: z.date(),
      updateDate: z.date().optional(),
      releaseYear: z.number(),
      cover: z.object({
        src: z.string(),
        alt: z.string(),
        seo: z.string(),
      }),
      review: z.optional(z.object({
        author: z.string(),
        content: z.string(),
        link: z.string().optional(),
      })),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    })
  })
}
