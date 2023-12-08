export const routes = {
  index: "/",
  experiences: "/experiences",
  projects: "/projects",
  getProject: (name) => `/projects/${name}`,
  about: "/about",
  blog: "/blog",
  getBlog: (slug) => `/blog/${slug}`,
  resume: "/resume.pdf",
  contact: "/contact",
};
