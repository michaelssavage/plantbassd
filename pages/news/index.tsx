import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import FilterTags from "components/FilterTags";
import Footer from "components/Footer";
import { CardWithText } from "components/Card";
import styles from "styles/page.module.scss";
import GoBack from "components/GoBack";
import { AllPostProps } from "types/frontmatter";
import { useTags } from "hooks";

const newsTags = [
  { name: "fresh juice", value: false },
  { name: "gigs", value: false },
  { name: "guides", value: false },
  { name: "premieres", value: false },
  { name: "reviews", value: false },
];

export default function NewsPage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, handleTags, hasErrored, newsStories, tagList } = useTags(newsTags, "news", files);

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <div className="newsBG">
        <h1 className={styles.pageHeader}>Plant Bass'd News</h1>

        <p className={styles.pageText}>
          News about club guides, gigs, and all things Plant Bass'd. Keep up to date on our
          Instagram,{" "}
          <a className="pinkUnderline" href="http://instagram.com/plantbassd___">
            @plantbassd___
          </a>
        </p>

        <FilterTags handleTags={handleTags} tagList={tagList} />

        <div className="row g-3">
          {newsStories.map((story: AllPostProps) => (
            <CardWithText
              key={story.frontmatter.name}
              link={`/${story.frontmatter.path}/${story.slug}`}
              post={story}
            />
          ))}
        </div>

        <div className={styles.viewAllBtn}>
          <Link href="/archive" className="btn btn-dark btn-lg px-5 py-2" type="button">
            View Archived Posts
          </Link>
        </div>

        <GoBack />
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const getAllPosts = (dirPath: string, arrFiles?) => {
    const files = fs.readdirSync(dirPath);
    let arrayOfFiles = arrFiles || [[] as AllPostProps[]];

    files.forEach((file) => {
      if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
        // If this is a directory, then recursively call function
        arrayOfFiles = getAllPosts(`${dirPath}/${file}`, arrayOfFiles);
      } else {
        const markdownWithMeta = fs.readFileSync(path.join(dirPath, file), "utf-8");
        const { data: frontmatter } = matter(markdownWithMeta);
        const slug = file.replace(".md", "");
        const blogPost = {
          frontmatter,
          slug,
        };
        arrayOfFiles.push(blogPost);
      }
    });
    return arrayOfFiles;
  };

  const files = getAllPosts("posts").sort(sortByDate).reverse().slice(0, 40);

  return {
    props: {
      files,
    },
  };
}
