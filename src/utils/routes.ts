import type { Project } from "@project/projectSchema";
import { strings } from "./strings";
import { projectsPage } from "./pages";

export const routes = {
  index: "/",
  blog: "/blog",
  about: "/about",
  resume:
    "https://drive.google.com/file/d/12ElTAmvDYSw_xNy2tRpJ5VjPHCxTAg1F/view?usp=sharing",
  projects: "/work",
  experiences: "/experiences",
  getExperience: (slug: string) => `/experiences/${slug}`,
  getBlog: (slug: string) => `/blog/${slug}`,
  contact: "#contact",
  getProjectRoute: (project: Project) =>
    projectsPage.allowCaseStudies
      ? // If case studies are allowed, link to the project page
        `/work/${project.slug}`
      : // Otherwise, link to the live URL
        `${project.liveUrl}?ref=${strings.website}`,
};
