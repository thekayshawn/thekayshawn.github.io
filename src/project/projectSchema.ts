import type { ProjectContent } from "@utils/types";
import { reference, z, type SchemaContext } from "astro:content";

// 2. Define your collection(s)
export const getProjectSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    snippet: z.string(),
    isDraft: z.boolean(),
    image: z.object({
      src: image(),
      alt: z.string(),
    }),
    category: z.string(),
    isFeatured: z.boolean(),
    tags: z.array(z.string()),
    liveUrl: z.string(),
    repoUrl: z.string(),
    relatedBlogs: z.array(reference("blog")).optional(),
    releaseDate: z.string().transform((str) => new Date(str)),
  });

export type Project = z.output<ReturnType<typeof getProjectSchema>> & {
  slug: string;
  color: string;
  render: () => ProjectContent;
};
