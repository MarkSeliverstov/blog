import fs from "fs";
import matter from "gray-matter";
import path from "path";

function getMDXData(dir: string): MdxFile[] {
  return fs
    .readdirSync(dir)
    .filter((file: string) => path.extname(file) === ".mdx")
    .map((file: string) => {
      const rawContent: string = fs.readFileSync(path.join(dir, file), "utf-8");
      const matterResult: matter.GrayMatterFile<string> = matter(rawContent);

      const metadata: MdxMetadata = matterResult.data as MdxMetadata;
      const content: string = matterResult.content;
      const slug: string = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    });
}

export function getBlogPosts(): MdxFile[] {
  const blogPostsPath: string = path.join(
    process.cwd(),
    "app",
    "blog",
    "posts",
  );
  return getMDXData(blogPostsPath);
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
  console.log(includeRelative);
  return includeRelative
    ? `${getRelativeDate(targetDate) ?? fullDate}`
    : fullDate;
}
