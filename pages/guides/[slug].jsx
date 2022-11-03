import { marked } from "marked";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import matter from "gray-matter";
import styles from "styles/slug.module.scss";
import fs from "fs";
import path from "path";

import GoBack from "@/btns/GoBack";

export default function TopTenSlug({ title, content }) {
  return (
    <>
      <Head>
        <title>Plant Bass'd Reviews</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className={`col ${styles.topTenContent}`}>
            <h1 className={styles.postTitle}>{title}</h1>
            <div className={styles.postBody}>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(content),
                }}
              />
            </div>
          </div>
          <GoBack />
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/guides"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("posts/guides", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      title: frontmatter.title,
    },
  };
}

TopTenSlug.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
