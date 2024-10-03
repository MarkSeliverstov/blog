import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export function BlogPosts(): Readonly<React.ReactNode> {
  const allBlogs: MdxFile[] = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort(
          // Sort the posts by date in descending order
          (a, b) =>
            new Date(b.metadata.date).getTime() -
            new Date(a.metadata.date).getTime(),
        )
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 md:items-center md:justify-between">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-lg">
                {post.metadata.title.length > 55 ? (
                  <span>{post.metadata.title.slice(0, 55)}...</span>
                ) : (
                  <span>{post.metadata.title}</span>
                )}
              </p>

              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums align-center text-sm">
                {formatDate(post.metadata.date, true)}
              </p>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {post.metadata.summary}
            </p>

            <div className="w-full flex flex-row space-x-2 items-center pt-2">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-2 py-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
    </div>
  );
}
