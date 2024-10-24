import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { CustomMDX } from "@/app/components/mdx";
import { Suspense } from "react";
import { baseUrl } from "@/app/sitemap";
import { notFound } from "next/navigation";
import { Tags } from "@/app/components/tags";
import { Metadata, ResolvingMetadata } from "next";
import { BuyMeCoffee } from "@/app/components/buyMeCoffee";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/* used to generate metadata for dynamic pages */
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata, // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPosts().allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return Promise.reject("Post not found");
  }

  const {
    title,
    date: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${baseUrl}${image}`
    : `${baseUrl}/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(
        description,
      )}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

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

function BlogImageHeader({
  imagePath,
}: {
  imagePath: string | undefined;
}): Readonly<React.ReactNode> {
  if (!imagePath) {
    return null;
  }
  return (
    <Image
      width={500}
      height={500}
      src={imagePath}
      alt="Blog post header image"
      className="w-full h-48 object-cover rounded-lg mt-4 mb-8"
    />
  );
}

export default async function Blog(props: {
  params: Promise<{ slug: string }>;
}): Promise<Readonly<React.ReactNode>> {
  const params = await props.params;
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
      <BlogImageHeader imagePath={post.metadata.image} />
      <BuyMeCoffee />
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
