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

export default function NewsPage({ files }) {
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
        <title>Plant Bass'd News</title>
      </Head>
      <div className={styles.newsBG}>
        <div className="container">
          <h1 className={styles.pageHeader}>Plant Bass'd News</h1>

          <p className={styles.pageText}>
            News about club guides, gigs, and all things Plant Bass'd. Keep up
            to date on our Instagram,{" "}
            <a
              className="blackAnchor"
              href="http://instagram.com/plantbassd___"
            >
              @plantbassd___
            </a>
          </p>

          <FilterTags handleTags={handleTags} tagList={tagList} />

          <div className="row g-3">
            {newsStories.map((story) => (
              <CardWithText
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
NewsPage.propTypes = {
  files: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
