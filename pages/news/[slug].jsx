import Content from "components/SlugContent";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import matter from "gray-matter";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import fs from "fs";
import path from "path";

export default function NewsSlug({ frontmatter: { title, date, pic, tickets, seeMore, postLink }, content }) {
  let buyLink = seeMore,
    buyText = "See More";

  if (tickets) {
    buyLink = tickets;
    buyText = "RA tickets";
  }

  return (
    <>
      <Head>
        <title>Plant Bass'd News</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            <Content content={content} date={date} title={title} />
            <CardWithButtons
              artist={buyText}
              insta="Instagram"
              link={postLink}
              page={buyLink}
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
export function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/news"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts/news", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}

NewsSlug.propTypes = {
  content: PropTypes.string.isRequired,
  frontmatter: PropTypes.instanceOf(Object).isRequired,
};
