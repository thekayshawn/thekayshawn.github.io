import { z } from "astro:content";

// 2. Define your collection(s)
export const blogSchema = z.object({
  draft: z.boolean(),
  title: z.string(),
  snippet: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  publishDate: z.string().transform((str) => new Date(str)),
  category: z.string(),
  tags: z.array(z.string()),
});

export type Blog = z.output<typeof blogSchema> & {
  slug: string;
};

export type BlogImage = z.output<typeof blogSchema.shape.image>;
