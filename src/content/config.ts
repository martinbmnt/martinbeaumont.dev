import { z, defineCollection } from 'astro:content';

export const collections = {
  project: defineCollection({
    type: 'content',
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
        src: image().refine((img) => img.width >= 1280 && img.height >= 960, {
          message: 'Cover images must be at least 1280x960'
        }),
        alt: z.string(),
        seo: image().refine((img) => img.width === 1200 && img.height === 600, {
          message: 'SEO images must be 1200x600'
        }),
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
    type: 'content',
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
