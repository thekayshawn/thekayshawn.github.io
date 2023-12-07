import { reference, z } from "astro:content";
import type { ProjectContent } from "@utils/types";

// 2. Define your collection(s)
export const projectSchema = z.object({
  title: z.string(),
  snippet: z.string(),
  isDraft: z.boolean(),
  image: z.object({
    src: z.string(),
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

export type Project = z.output<typeof projectSchema> & {
  slug: string;
  color: string;
  render: () => ProjectContent;
};

export type ProjectImage = z.output<typeof projectSchema.shape.image>;
