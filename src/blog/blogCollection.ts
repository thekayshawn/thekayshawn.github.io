import type { Blog } from "./blogSchema";
import { getCollection } from "astro:content";

export const blogCategories = [
  {
    name: "courses",
    color: "green",
  },
  {
    name: "tutorials",
    color: "indigo",
  },
  {
    name: "technology",
    color: "pink",
  },
];

export const blogCollection: Blog[] = [];

await getCollection(
  "blog",
  ({ data }) => !data.draft && data.publishDate < new Date()
).then((collection) =>
  collection.map(({ data, slug, render }) => {
    // Apply a color to the blog based on the category
    const category = blogCategories.find(
      ({ name }) => name.toLowerCase() === data.category.toLowerCase()
    );

    const blog = {
      ...data,
      slug,
      render,
      color: category?.color || "green",
    };

    blogCollection.push(blog);
  })
);

export const sortedBlogCollection = blogCollection.sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
);

export const categorizedBlogCollection: {
  blogs: Blog[];
  category: string;
}[] = [];

blogCollection.map((blog) => {
  if (blog.category) {
    // The goal here is to create a categorized collection if it doesn't exist
    // and add the blog to the categorized collection if it does exist.

    // 2. Find the categorized collection that matches the blog's category
    const categorizedCollection = categorizedBlogCollection.find(
      (b) => b.category === blog.category
    );

    // 3. If the categorized collection doesn't exist, create it
    // and add the blog to it.
    if (!categorizedCollection) {
      categorizedBlogCollection.push({
        blogs: [blog],
        category: blog.category,
      });

      return;
    }

    // 4. If the categorized collection does exist, add the blog to it.
    categorizedCollection.blogs.push(blog);
  }
});
