// 1. Import utilities from `astro:content`
import { blogSchema } from "@blog/blogSchema";
import { defineCollection } from "astro:content";
import { projectSchema } from "@project/projectSchema";
import { experienceSchema } from "@experience/experienceSchema";

// 2. Define your collection(s)
const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

const project = defineCollection({
  type: "content",
  schema: projectSchema,
});

const experience = defineCollection({
  type: "data",
  schema: experienceSchema,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog,
  project,
  experience,
};
