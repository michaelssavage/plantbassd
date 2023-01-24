import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { promises as fs } from "fs";

export const getSlugPath = async (slug: string) => {
  const files = await fs.readdir(`posts/${slug}`);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return paths;
};

export const getSlugContent = async (folder: string, slug: string) => {
  const fileContent = await fs.readFile(path.join(`posts/${folder}`, `${slug}.mdx`), "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return { frontmatter, mdxSource };
};
