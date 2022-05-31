import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import FilterTags from "components/FilterTags";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import useFilterTags from "hooks/useFilterTags";

import CardWithText from "@/cards/CardWithText";
import GoBack from "@/btns/GoBack";
import styles from "@/pageStyle/page.module.scss";

const newsTags = [
  { name: "fresh juice", value: false },
  { name: "gigs", value: false },
  { name: "guides", value: false },
  { name: "premieres", value: false },
];

export default function ArchivePage({ files }) {
  const { error, handleTags, hasErrored, newsStories, tagList } = useFilterTags(
    newsTags,
    "news",
    files
  );

  if (hasErrored) {
    <Error error={error} />;
  }

  return (
    <>
      <Head>
        <title>Plant Bass'd Archive</title>
      </Head>
      <div className={styles.takeoverBG}>
        <div className="container">
          <h1 className={styles.pageHeader}>Plant Bass'd Archive</h1>

          <FilterTags handleTags={handleTags} tagList={tagList} />

          <div className="row g-3">
            {newsStories.map((story) => (
              <CardWithText
                columns="col-4 col-sm-4 col-md-4 col-lg-2"
                key={story.frontmatter.title}
                link={`/${story.frontmatter.path}/${story.slug}`}
                post={story}
              />
            ))}
          </div>

          <GoBack />
        </div>
      </div>

      <Footer />
    </>
  );
}

/* eslint-disable */
export async function getStaticProps() {
  const getAllPosts = (dirPath, posts) => {
    const allPosts = posts || [],
      folders = fs.readdirSync(dirPath);

    folders.forEach((file) => {
      if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
        // If this is a directory, then recursively call function
        getAllPosts(`${dirPath}/${file}`, allPosts);
      } else {
        const markdownWithMeta = fs.readFileSync(
            path.join(dirPath, file),
            "utf-8"
          ),
          { data: frontmatter } = matter(markdownWithMeta),
          slug = file.replace(".md", "");

        allPosts.push({
          frontmatter,
          slug,
        });
      }
    });
    return allPosts;
  };

  const files = getAllPosts("posts").sort(sortByDate).reverse();

  return {
    props: {
      files,
    },
  };
}
/* eslint-enable */
ArchivePage.propTypes = {
  files: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
