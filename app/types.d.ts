type MdxMetadata = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  image?: string;
};

type MdxFile = {
  metadata: MdxMetadata;
  slug: string;
  content: string;
};

type BlogData = {
  allTags: string[];
  allPosts: MdxFile[];
};

type ClassNameProps = {
  className?: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link: string;
};
