import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";

import { Slug } from "components/Slug";
import { StaticProps } from "types/frontmatter";

export default function FreshJuiceSlug({
  frontmatter,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { artist = "Bandcamp", title, date, pic, bandcamp, postLink } = frontmatter;
  return (
    <>
      <Head>
        <title>Fresh Juice</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {Slug(content, date, title)}
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

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const markdownWithMeta = fs.readFileSync(path.join("posts/fresh-juice", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
