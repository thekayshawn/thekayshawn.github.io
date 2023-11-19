import type { Blog } from "./blogSchema";
import { getCollection } from "astro:content";

export const blogCollection = await getCollection(
  "blog",
  ({ data }) => !data.draft && data.publishDate < new Date()
);

export const categorizedBlogCollection: {
  blogs: Blog[];
  category: string;
}[] = [];

blogCollection.map(({ data, slug }) => {
  if (data.category) {
    // The goal here is to create a categorized collection if it doesn't exist
    // and add the blog to the categorized collection if it does exist.

    // 1. Create a new object with the blog data and the slug
    // This will serve as our new blog.
    const blog = { ...data, slug };

    // 2. Find the categorized collection that matches the blog's category
    const categorizedCollection = categorizedBlogCollection.find(
      (blog) => blog.category === data.category
    );

    // 3. If the categorized collection doesn't exist, create it
    // and add the blog to it.
    if (!categorizedCollection) {
      categorizedBlogCollection.push({
        blogs: [blog],
        category: data.category,
      });

      return;
    }

    // 4. If the categorized collection does exist, add the blog to it.
    categorizedCollection.blogs.push(blog);
  }
});
