import type { Project } from "./projectSchema";
import { getCollection, getEntries } from "astro:content";

export const projectCategories = [
  {
    name: "Portfolio",
    color: "amber",
  },
  {
    name: "Freelance",
    color: "green",
  },
  {
    name: "SaaS",
    color: "indigo",
  },
  {
    name: "Open Source",
    color: "pink",
  },
  // {
  //   name: "UX/UI",
  //   color: "red",
  // },
  {
    name: "Astronomy",
    color: "teal",
  },
  // {
  //   name: "Tentwenty",
  //   color: "blue",
  // },
];

export const projectCollection: Project[] = [];

await getCollection(
  "project",
  // Only include projects that are not drafts and have been released
  ({ data }) => !data.isDraft && data.releaseDate < new Date()
).then((collection) =>
  collection.map(({ data, slug, render }) => {
    // Apply a color to the project based on the category
    const category = projectCategories.find(
      ({ name }) => name.toLowerCase() === data.category.toLowerCase()
    );

    const project = {
      ...data,
      slug,
      render,
      color: category?.color || "green",
    };

    projectCollection.push(project);
  })
);

export const sortedProjectCollection = projectCollection.sort(
  (a, b) =>
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
);

export const featuredProjectCollection = sortedProjectCollection.filter(
  (project) => project.isFeatured
);
