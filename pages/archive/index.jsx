import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import matter from "gray-matter";
import useFilter from "hooks/useFilter";
import { CardWithText } from "components/Card";
import styles from "styles/page.module.scss";
import fs from "fs";
import path from "path";

import GoBack from "@/btns/GoBack";

export default function ArchivePage({ files }) {
  const { error, filter, hasErrored, postCards, setFilter } = useFilter(files);

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  if (hasErrored) {
    return <Error error={error} />;
  }

  return (
    <>
      <Head>
        <title>Plant Bass'd Archive</title>
      </Head>
      <div className="archiveBG">
        <h1 className={styles.pageHeader}>Plant Bass'd Archive</h1>

        {/* SEARCH BOX */}
        <div className={`input-group ${styles.archiveFilter}`}>
          <input
            aria-label="Filter"
            className="form-control"
            onChange={handleSearchChange}
            placeholder="Enter a search query..."
            type="text"
            value={filter}
          />
          <p className="m-0">{postCards.length} Posts</p>
        </div>

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
  const getAllPosts = (dirPath, posts) => {
    const allPosts = posts || [];
    const folders = fs.readdirSync(dirPath);

    folders.forEach((file) => {
      if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
        // If this is a directory, then recursively call function
        getAllPosts(`${dirPath}/${file}`, allPosts);
      } else {
        const markdownWithMeta = fs.readFileSync(path.join(dirPath, file), "utf-8");
        const { data: frontmatter } = matter(markdownWithMeta);
        const slug = file.replace(".md", "");

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
