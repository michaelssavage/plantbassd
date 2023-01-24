import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";

export const getSlugPath = async (slug: string) => {
  const files = await fs.readdir(`posts/${slug}`);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return paths;
};

export const getSlugContent = async (folder: string, slug: string) => {
  const markdownWithMeta = await fs.readFile(path.join(`posts/${folder}`, `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return { frontmatter, content };
};
