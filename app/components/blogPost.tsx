import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { Tags } from "./tags";
import Link from "next/link";
import Image from "next/image";

export function BlogPosts(): Readonly<React.ReactNode> {
  const blog: BlogData = getBlogPosts();

  return (
    <div>
      {blog.allPosts
        .filter((post) => post.metadata)
        .sort(
          // Sort the posts by date in descending order
          (a, b) =>
            new Date(b.metadata?.date ?? "1970-01-01").getTime() -
            new Date(a.metadata?.date ?? "1970-01-01").getTime(),
        )
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-row">
              {post.metadata.image && (
                <Image
                  width={500}
                  height={500}
                  src={post.metadata.image}
                  className="h-auto w-32 object-cover hidden sm:block rounded-l-lg"
                  alt={post.metadata.title ? post.metadata.title : "Undefined"}
                />
              )}
              <div className="p-4 w-full">
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 md:items-center md:justify-between">
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-lg">
                    {post.metadata.title && post.metadata.title.length > 55 ? (
                      <span>{post.metadata.title.slice(0, 55)}...</span>
                    ) : (
                      <span>{post.metadata.title}</span>
                    )}
                  </p>

                  <p className="text-neutral-600 dark:text-neutral-400 tabular-nums align-center text-sm">
                    {post.metadata.date
                      ? formatDate(post.metadata.date)
                      : "some day"}
                  </p>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {post.metadata.summary}
                </p>
                {post.metadata.tags && post.metadata.tags?.length > 1 && (
                  <Tags names={post.metadata.tags} />
                )}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
