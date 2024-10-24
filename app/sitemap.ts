import { getBlogPosts } from "@/app/blog/utils";
export const dynamic = 'force-static'; // https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#runtime
export const baseUrl = "https://mark.seliverstov.dev";

export const siteMetadata = {
  title: "Mark Seliverstov",
  description:
    "I'm a software engineer who writes about software, technology, and other things that interest me.",
  siteUrl: "https://mark.seliverstov.dev",
  sourceCodeUrl: "https://github.com/MarkSeliverstov/blog",
  socials: {
    telegram: "https://t.me/smdmrr",
    linkedin: "https://www.linkedin.com/in/mark-seliverstov/",
    github: "https://github.com/MarkSeliverstov",
    email: "mailto:seliverstovmd@gmail.com",
    buyMeCoffee: "https://buymeacoffee.com/mark.seliverstov",
  },
};

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
