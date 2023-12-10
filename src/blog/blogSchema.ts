import type { BlogContent } from "@utils/types";
import { z, type SchemaContext } from "astro:content";

// 2. Define your collection(s)
export const getBlogSchema = ({ image }: SchemaContext) =>
  z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: image(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    category: z.string(),
    tags: z.array(z.string()),
  });

export type Blog = z.output<ReturnType<typeof getBlogSchema>> & {
  slug: string;
  color: string;
  render: () => BlogContent;
};
