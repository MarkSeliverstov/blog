import fs from "fs";
import matter from "gray-matter";
import path from "path";

function readDirectory(dir: string): { subdirectories: string[], files: MdxFile[], tags: string[] } {
  const tags: string[] = [];
  const files: MdxFile[] = [];
  const subdirectories: string[] = [];

  fs.readdirSync(dir, { withFileTypes: true }).forEach((dirent: fs.Dirent) => {
    if (dirent.isDirectory()) {
      subdirectories.push(path.join(dir, dirent.name));
    } else if (path.extname(dirent.name) === ".mdx") {
      const fileData = processMdxFile(dir, dirent.name);
      tags.push(...fileData.tags);
      files.push(fileData.file);
    }
  });

  return { subdirectories, files, tags };
}

function processMdxFile(dir: string, fileName: string): { file: MdxFile, tags: string[] } {
  const rawContent: string = fs.readFileSync(path.join(dir, fileName), "utf-8");
  const matterResult: matter.GrayMatterFile<string> = matter(rawContent);

  const metadata: MdxMetadata = matterResult.data as MdxMetadata;
  const content: string = matterResult.content;
  const slug: string = path.basename(fileName, path.extname(fileName)).replace(".mdx", "");

  return {
    file: {
      metadata,
      slug,
      content,
    },
    tags: metadata.tags,
  };
}

function gatherSubdirectoryData(subdirectories: string[]): BlogData {
  return subdirectories.reduce(
    (acc: BlogData, subdir: string) => {
      const data: BlogData = getMdxBlogData(subdir);
      acc.allPosts.push(...data.allPosts);
      acc.allTags.push(...data.allTags);
      return acc;
    },
    { allTags: [], allPosts: [] },
  );
}

function getMdxBlogData(dir: string): BlogData {
  const { subdirectories, files, tags } = readDirectory(dir);
  const BlogDataInSubdirectories: BlogData = gatherSubdirectoryData(subdirectories);
  return {
    allTags: tags.concat(BlogDataInSubdirectories.allTags),
    allPosts: files.concat(BlogDataInSubdirectories.allPosts),
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
