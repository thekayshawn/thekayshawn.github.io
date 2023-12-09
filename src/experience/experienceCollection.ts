import { getCollection } from "astro:content";
import type { Experience } from "./experienceSchema";

export const experienceCollection: Experience[] = [];

await getCollection("experience").then((collection) =>
  collection.forEach(({ data, slug }) =>
    experienceCollection.push({
      slug,
      ...data,
    })
  )
);

export const sortedExperienceCollection = experienceCollection.sort((a, b) =>
  a.from > b.from ? -1 : 1
);
