import { BlogPosts } from "@/app/components/blogPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page(): Readonly<React.ReactNode> {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
