import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

export function BlogPosts(): Readonly<React.ReactNode> {
  let allBlogs: MdxFile[] = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort( // Sort the posts by date in descending order
          (a, b) =>
            new Date(b.metadata.date).getTime() -
            new Date(a.metadata.date).getTime(),
        )
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                {formatDate(post.metadata.date, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
