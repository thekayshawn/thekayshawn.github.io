import { z } from "astro:content";

// 2. Define your collection(s)
export const experienceSchema = z.object({
  job: z.string(),
  location: z.string(),
  snippets: z.array(z.string()),
  organization: z.string(),
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

export type Experience = z.output<typeof experienceSchema> & {
  slug: string;
};

export type ExperienceLink = {
  href: string;
  text: string;
};
