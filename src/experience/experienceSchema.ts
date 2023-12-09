import { z } from "astro:content";

// 2. Define your collection(s)
export const experienceSchema = z.object({
  jobs: z.array(
    z.object({
      title: z.string(),
      designation: z.string(),
    })
  ),
  snippet: z.string(),
  organization: z.string(),
  url: z.string(),
  from: z.string().transform((str) => new Date(str)),
  to: z.string().transform((str) => new Date(str)),
  links: z
    .array(
      z.object({
        href: z.string(),
        text: z.string(),
      })
    )
    .optional(),
  tags: z.array(z.string()),
});

export type Experience = z.output<typeof experienceSchema> & {
  slug: string;
};

export type ExperienceJob = z.output<typeof experienceSchema.shape.jobs>[0];

export type ExperienceLink = {
  href: string;
  text: string;
};
