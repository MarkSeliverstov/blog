import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { CustomMDX } from "@/app/components/mdx";
import { Suspense } from "react";
import { baseUrl } from "@/app/sitemap";
import { notFound } from "next/navigation";

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

export default function Blog({
  params,
}: {
  params: { slug: string };
}): Readonly<React.ReactNode> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
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
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.date)}
          {post.metadata.tags.length > 0 &&
            ` · [ ${post.metadata.tags.join(", ")} ]`}
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Summary: {post.metadata.summary}
        </p>
      </div>
      <article className="prose">
        <Suspense fallback={<>Loading...</>}>
          <CustomMDX source={post.content} />
        </Suspense>
      </article>
    </section>
  );
}
