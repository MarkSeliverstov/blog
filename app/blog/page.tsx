import { BlogPosts } from "@/app/components/blogPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page(): Readonly<React.ReactNode> {
  return (
    <section>
      <p className="text-neutral-900 dark:text-neutral-100 text-lg mb-8">
        I believe that writing is a great way to learn and share knowledge,
        so I write about software, technology, and other things that interest me.
      </p>
      <BlogPosts />
    </section>
  );
}
