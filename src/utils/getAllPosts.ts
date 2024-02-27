// https://qwtel.com/posts/software/async-generators-in-the-wild
import matter from "gray-matter";
import { resolve } from "path";
import { promises as fs } from "fs";
import { AllPostProps } from "types/frontmatter";

/**
 * Recursively Reading All Files From a Directory
 * An async iterator that returns a result whenever
 * the necessary async operations complete
 */
async function* recursiveFind(dir: string) {
  const posts = await fs.readdir(dir, { withFileTypes: true });
  for (const dirPath of posts) {
    const res = resolve(dir, dirPath.name);
    if (dirPath.isDirectory()) {
      yield* recursiveFind(res);
    } else {
      const fileContents = await fs.readFile(res, "utf8");
      const { data: frontmatter } = matter(fileContents);
      const slug = dirPath.name.replace(".mdx", "");
      yield { frontmatter, slug };
    }
  }
}
/**
 * we can "consume" an entire async iterator and
 * push the results into an array.
 */
export const getAllPosts = async () => {
  const posts = await recursiveFind("src/posts");
  const res: AllPostProps[] = [];
  for await (const item of posts) {
    res.push(item);
  }
  return res;
};
