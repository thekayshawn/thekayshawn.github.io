import type { Blog } from "@blog/blogSchema";
import type { Project } from "@project/projectSchema";
import { strings } from "./strings";
import { projectsPage } from "./pages";

export const routes = {
  index: "/",
  blog: "/blog",
  about: "/about",
  projects: "/projects",
  experiences: "/experiences",
  getBlog: (slug: Blog["slug"]) => `/blog/${slug}`,
  resume: "/resume.pdf",
  contact: `mailto:${strings.emailAddress}?subject=Hey%20Kashan!`,
  getProjectRoute: (project: Project) =>
    projectsPage.allowCaseStudies
      ? // If case studies are allowed, link to the project page
        `/projects/${project.slug}`
      : // Otherwise, link to the live URL
        project.liveUrl,
};
