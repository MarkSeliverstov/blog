import { getBlogPosts } from "@/app/blog/utils";

export const baseUrl = "https://localhost:3000";
export const sourceCodeUrl = "https://github.com/MarkSeliverstov/blog";

export default async function sitemap() {
  const blogs = getBlogPosts().allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
