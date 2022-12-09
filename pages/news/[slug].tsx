import Head from "next/head";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import Footer from "components/Footer";
import Content from "components/SlugContent";

interface NewsSlugProps {
  content: string;
  frontmatter: {
    title: string;
    date: string;
    pic: string;
    tickets?: string;
    seeMore: string;
    postLink: string;
  };
}

export default function NewsSlug({ content, frontmatter }: NewsSlugProps) {
  const { title, date, pic, tickets, seeMore, postLink } = frontmatter;

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
export async function getStaticProps({ params: { slug } }): GetStaticProps {
  const markdownWithMeta = fs.readFileSync(path.join("posts/news", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
