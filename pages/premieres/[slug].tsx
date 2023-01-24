import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";

import { Slug } from "components/Slug";
import { StaticProps } from "types/frontmatter";

export default function PremieresSlug({
  content,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, seeMore, postLink, youtube } = frontmatter;

  return (
    <>
      <Head>
        <title>Premieres</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {Slug(content, date, title)}
            <CardWithButtons
              artist="See More"
              insta="Instagram"
              link={postLink}
              page={seeMore}
              pic={pic}
              title={title}
            />
          </div>
          <div className="row mt-5">
            {youtube ? (
              <iframe
                src={youtube}
                width={560}
                height={720}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/premieres"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts/premieres", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
