import fs from "fs";
import matter from "gray-matter";
import path from "path";

function getMdxBlogData(dir: string): BlogData {
  const tags: string[] = [];
  const files: MdxFile[] = fs
    .readdirSync(dir)
    .filter((file: string) => path.extname(file) === ".mdx")
    .map((file: string) => {
      const rawContent: string = fs.readFileSync(path.join(dir, file), "utf-8");
      const matterResult: matter.GrayMatterFile<string> = matter(rawContent);

      const metadata: MdxMetadata = matterResult.data as MdxMetadata;
      const content: string = matterResult.content;
      const slug: string = path.basename(file, path.extname(file)).replace(".mdx", "");
      tags.push(...metadata.tags);

      return {
        metadata,
        slug,
        content,
      };
    });
  return {
    allTags: tags,
    allPosts: files,
  };
}

export function getBlogPosts(): BlogData {
  const blogPostsPath: string = path.join(
    process.cwd(),
    "app",
    "blog",
    "posts",
  );
  return getMdxBlogData(blogPostsPath);
}

function getRelativeDate(targetDate: Date): string | null {
  const currentDate: Date = new Date();
  const daysAgo: number = currentDate.getDate() - targetDate.getDate();
  if (daysAgo === 0) {
    return `Today`;
  }
  if (daysAgo === 1) {
    return `Yesterday`;
  }
  return null;
}

export function formatDate(
  date: string,
  includeRelative: boolean = true,
): string {
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate: Date = new Date(date);
  const fullDate: string = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return includeRelative
    ? `${getRelativeDate(targetDate) ?? fullDate}`
    : fullDate;
}

export function getAllTags(): string[] {
  const blogPostsPath: string = path.join(
    process.cwd(),
    "app",
    "blog",
    "posts",
  );
  const tags: string[] = [];
  fs.readdirSync(blogPostsPath)
    .filter((file: string) => path.extname(file) === ".mdx")
    .map((file: string) => {
      const rawContent: string = fs.readFileSync(
        path.join(blogPostsPath, file),
        "utf-8",
      );
      const matterResult: matter.GrayMatterFile<string> = matter(rawContent);
      tags.push(...(matterResult.data.tags as string[]));
    });
  return tags;
}
