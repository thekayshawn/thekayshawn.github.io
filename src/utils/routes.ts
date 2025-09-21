import type { Blog } from "@blog/blogSchema";
import type { Project } from "@project/projectSchema";
import { strings } from "./strings";
import { projectsPage } from "./pages";

export const routes = {
  index: "/",
  blog: "/blog",
  about: "/about",
  projects: "/work",
  experiences: "/resume",
  getBlog: (slug: Blog["slug"]) => `/blog/${slug}`,
  resume:
    "https://drive.google.com/file/d/13zhTxNKT_shaMutlK8xfymfLm7CyhpsB/view?usp=sharing",
  // contact: `mailto:${strings.emailAddress}?subject=Hey%20Kashan!`,
  contact: "#contact",
  getProjectRoute: (project: Project) =>
    projectsPage.allowCaseStudies
      ? // If case studies are allowed, link to the project page
        `/work/${project.slug}`
      : // Otherwise, link to the live URL
        `${project.liveUrl}?utm_source=${strings.website}&utm_medium=referral&utm_campaign=portfolio`,
};
