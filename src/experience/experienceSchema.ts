import type { MarkdownContent } from "@utils/types";
import { z, type SchemaContext } from "astro:content";

// 2. Define your collection(s)
export const getExperienceSchema = ({ image }: SchemaContext) =>
  z.object({
    job: z.string(),
    location: z.string().optional().nullable(),
    snippets: z.array(z.string()),
    organization: z.string(),
    image: z
      .object({
        src: image(),
        alt: z.string(),
      })
      .optional()
      .nullable(),
    url: z.string(),
    from: z.string().transform((str) => new Date(str)),
    to: z
      .string()
      .transform((str) => new Date(str))
      .optional()
      .nullable(),
    links: z
      .array(
        z.object({
          href: z.string(),
          text: z.string(),
        })
      )
      .optional()
      .optional(),
    tags: z.array(z.string()),
  });

export type Experience = z.output<ReturnType<typeof getExperienceSchema>> & {
  slug: string;
  render: () => MarkdownContent;
};

export type ExperienceLink = {
  href: string;
  text: string;
};
