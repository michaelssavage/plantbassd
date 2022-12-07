import { marked } from "marked";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import matter from "gray-matter";
import { Picture } from "components/Picture";
import SocialIcon from "components/SocialIcon";
import fs from "fs";
import path from "path";
import styles from "./TopTen.module.scss";

export default function TopTenSlug({ title, date, cover, intro, header, content }) {
  return (
    <>
      <Head>
        <title>Plant Bass'd Reviews</title>
      </Head>
      <div className={styles.outerSection}>
        <div className="container">
          <div className={`col ${styles.topTenContent}`}>
            <p className={styles.postDate}>Posted on {date}</p>
            <h1 className={styles.postTitle}>{title}</h1>

            <div className="d-flex flex-column align-items-center">
              <Picture alt="artist press pic" height={500} src={cover} width={500} />
              <p className="small">(Pictured: {header})</p>

              <a
                className={`${styles.spotify} text-nowrap btn btn-dark my-2`}
                href="https://open.spotify.com/playlist/3EV4meqUK8g5IEYGqxsvNf?si=44648f12a9e04170"
                rel="noopener noreferrer"
                role="button"
                target="_blank"
              >
                <SocialIcon icon="spotify" /> Top Picks 2022
              </a>

              <p>{intro}</p>
            </div>

            <hr />

            <div className={styles.postBody}>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(content),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/top-ten-releases"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts/top-ten-releases", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      title: frontmatter.title,
      date: frontmatter.date,
      cover: frontmatter.cover,
      intro: frontmatter.intro,
      header: frontmatter.header,
    },
  };
}

TopTenSlug.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};
