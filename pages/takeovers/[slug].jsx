import { marked } from "marked";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

import CardWithButtons from "@/cards/CardWithButtons";
import styles from "@/pageStyle/slug.module.scss";

export default function TakeoverSlug({ frontmatter: { title, date, pic, artistPage, postLink }, content }) {
  return (
    <>
      <Head>
        <title>Plant Bass'd Takeovers</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            <div
              className={`${styles.postContent}
							col-lg-6
							col-md-12
							col-xl-6`}
            >
              <p className={styles.postDate}>Posted on {date}</p>
              <h1 className={styles.postTitle}>{title}</h1>
              <div className={styles.postBody}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(content),
                  }}
                />
              </div>
            </div>

            <CardWithButtons
              artist="Artist's Insta"
              insta="Instagram"
              link={postLink}
              page={artistPage}
              pic={pic}
              title={title}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/takeovers"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts/takeovers", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}

TakeoverSlug.propTypes = {
  content: PropTypes.string.isRequired,
  frontmatter: PropTypes.instanceOf(Object).isRequired,
};
