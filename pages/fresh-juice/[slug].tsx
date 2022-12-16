import Head from "next/head";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import Footer from "components/Footer";
import Content from "components/SlugContent";

interface FreshJuiceSlugProps {
  content: string;
  frontmatter: {
    title: string;
    date: string;
    pic: string;
    tickets: string;
    seeMore: string;
    postLink: string;
  };
}

export default function FreshJuiceSlug({ frontmatter, content }: FreshJuiceSlugProps) {
  const { artist = "Bandcamp", title, date, pic, bandcamp, postLink } = frontmatter;
  return (
    <>
      <Head>
        <title>Fresh Juice</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            <Content content={content} date={date} title={title} />
            <CardWithButtons
              artist={artist}
              insta="Instagram"
              link={postLink}
              page={bandcamp}
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
  const files = fs.readdirSync(path.join("posts/fresh-juice"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts/fresh-juice", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
