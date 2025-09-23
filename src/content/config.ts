// 1. Import utilities from `astro:content`
import { getBlogSchema } from "@blog/blogSchema";
import { defineCollection } from "astro:content";
import { getProjectSchema } from "@project/projectSchema";
import { getExperienceSchema } from "@experience/experienceSchema";

// 2. Define your collection(s)
const blog = defineCollection({
  type: "content",
  schema: getBlogSchema,
});

const project = defineCollection({
  type: "content",
  schema: getProjectSchema,
});

const experience = defineCollection({
  type: "content",
  schema: getExperienceSchema,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog,
  project,
  experience,
};
