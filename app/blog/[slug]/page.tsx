import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { CustomMDX } from "@/app/components/mdx";
import { Suspense } from "react";
import { baseUrl } from "@/app/sitemap";
import { notFound } from "next/navigation";
import { Tags } from "@/app/components/tags";
import { Metadata } from "next";

/** Used to generate static pages */
export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.allPosts.map((post) => ({
    slug: post.slug,
  }));
}

function seoScript(metadata: MdxMetadata, slug: string): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    datePublished: metadata.date,
    dateModified: metadata.date,
    description: metadata.summary,
    image: metadata.image
      ? `${baseUrl}${metadata.image}`
      : `/og?title=${encodeURIComponent(metadata.title)}`,
    url: `${baseUrl}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: "Mark Seliverstov",
    },
  });
}

export const metadata: Metadata = { title: "Post" };

function BlogTitle({ post }: { post: MdxFile }): Readonly<React.ReactNode> {
  return (
    <div>
      <h1 className="title font-semibold text-4xl mb-0">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mb-2 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.date)}
        </p>
      </div>
    </div>
  );
}

export default function Blog({
  params,
}: {
  params: { slug: string };
}): Readonly<React.ReactNode> {
  const post = getBlogPosts().allPosts.find(
    (post) => post.slug === params.slug,
  );
  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: seoScript(post.metadata, post.slug),
        }}
      />
      <BlogTitle post={post} />
      <Tags names={post.metadata.tags} />
      <article className="prose">
        <Suspense fallback={<>Loading...</>}>
          <CustomMDX source={post.content} />
        </Suspense>
      </article>
    </section>
  );
}
