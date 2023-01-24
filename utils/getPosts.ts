import matter from "gray-matter";
import { join, resolve } from "path";
import { promises as fs } from "fs";

export const getPosts = async (dir: string) => {
  const files = await fs.readdir(join("posts", dir), { withFileTypes: true });
  const posts = [];

  for await (const dirPath of files) {
    const res = resolve("posts", dir, dirPath.name);
    const fileContents = await fs.readFile(res, "utf8");
    const { data: frontmatter } = matter(fileContents);
    const slug = dirPath.name.replace(".mdx", "");
    posts.push({ frontmatter, slug });
  }
  return posts;
};
