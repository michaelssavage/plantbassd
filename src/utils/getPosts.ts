import matter from "gray-matter";
import { join, resolve } from "path";
import { promises as fs } from "fs";
import { Frontmatter, PostProps } from "types/frontmatter";

export const getPosts = async (dir: string): Promise<PostProps[]> => {
  const files = await fs.readdir(join("src/posts", dir), { withFileTypes: true });
  const posts = [];

  for await (const dirPath of files) {
    const res = resolve("src/posts", dir, dirPath.name);
    const fileContents = await fs.readFile(res, "utf8");

    const { data } = matter(fileContents);
    const frontmatter: Frontmatter = data as Frontmatter;
    const slug = dirPath.name.replace(".mdx", "");
    posts.push({ frontmatter, slug });
  }
  return posts;
};
