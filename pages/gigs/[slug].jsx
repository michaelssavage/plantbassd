import CardWithButtons from "@/cards/CardWithButtons";
import Footer from "components/Footer";
import GigPosts from "components/GigPosts";
import Head from "next/head";
import PropTypes from "prop-types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import styles from "@/pageStyle/slug.module.scss";

export default function GigsSlug({
  frontmatter: {
    title,
    date,
    pic,
    tickets,
    seeMore,
    postLink,
    anames,
    alinks,
    apics,
  },
  content,
}) {
  let buyLink = seeMore,
    buyText = "See More";

  if (tickets) {
    buyLink = tickets;
    buyText = "RA tickets";
  }

  return (
    <>
      <Head>
        <title>Plant Bass'd Gigs</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            <GigPosts
              alinks={alinks}
              anames={anames}
              apics={apics}
              content={content}
              date={date}
              title={title}
            />
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
  const files = fs.readdirSync(path.join("posts/gigs")),
    paths = files.map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    }));

  return {
    fallback: false,
    paths,
  };
}
// eslint-disable-next-line func-style, require-await
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
      path.join("posts/gigs", `${slug}.md`),
      "utf-8"
    ),
    { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}

GigsSlug.propTypes = {
  content: PropTypes.string.isRequired,
  frontmatter: PropTypes.instanceOf(Object).isRequired,
};
