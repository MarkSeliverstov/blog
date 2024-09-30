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
