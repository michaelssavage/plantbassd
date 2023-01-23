import Head from "next/head";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import Footer from "components/Footer";
import { useFilter } from "hooks/useFilter.hook";
import { CardWithText } from "components/Card";
import styles from "styles/page.module.scss";
import GoBack from "components/GoBack";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";

export default function ArchivePage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(files, "posts");

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Archive</title>
      </Head>
      <div className="archiveBG">
        <h1 className={styles.pageHeader}>Plant Bass'd Archive</h1>

        <SearchBox
          handleSearchChange={handleSearchChange}
          filter={filter}
          amount={postCards.length}
          style={`input-group ${styles.archiveFilter}`}
        />

        <div className="row g-3">
          {postCards.map((story) => (
            <CardWithText
              columns="col-4 col-sm-4 col-md-4 col-lg-2"
              key={story.frontmatter.name}
              link={`/${story.frontmatter.path}/${story.slug}`}
              post={story}
            />
          ))}
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
    let arrayOfFiles = arrFiles || ([] as AllPostProps[]);

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

  const files = getAllPosts("posts").sort(sortByDate).reverse();

  return {
    props: {
      files,
    },
  };
}
