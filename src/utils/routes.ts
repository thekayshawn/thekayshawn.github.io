import type { Blog } from "@blog/blogSchema";
import type { Project } from "@project/projectSchema";
import { strings } from "./strings";

export const routes = {
  index: "/",
  experiences: "/experiences",
  projects: "/projects",
  // getProject: (project: Project) => `/projects/${project.slug}`,
  getProjectRoute: (project: Project) => project.liveUrl,
  about: "/about",
  blog: "/blog",
  getBlog: (slug: Blog["slug"]) => `/blog/${slug}`,
  resume: "/resume.pdf",
  contact: `mailto:${strings.emailAddress}?subject=Hey%20Kashan!`,
};
