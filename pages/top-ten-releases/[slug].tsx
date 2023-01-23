import { marked } from "marked";
import Head from "next/head";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import { Picture } from "components/Picture";
import { Icon } from "components/Icon";
import Footer from "components/Footer";
import { StaticProps } from "types/frontmatter";
import styles from "./TopTen.module.scss";

export default function TopTenSlug(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, cover, intro, header, insta, content } = props;
  return (
    <>
      <Head>
        <title>{`${header} - Reviews`}</title>
      </Head>
      <div className={styles.outerSection}>
        <div className="container">
          <div className={`col ${styles.topTenContent}`}>
            <p className={styles.postDate}>Posted on {date}</p>
            <Picture alt="artist press pic" size={1200} src={cover} />
            <p className="smallText text-center">(Pictured: {header})</p>

            <h1 className={styles.postTitle}>{title}</h1>

            <p>{intro}</p>

            <div className="d-flex justify-content-end gap-2 flex-wrap">
              <a
                className={`${styles.instagram} text-nowrap btn btn-dark`}
                href={insta}
                rel="noopener noreferrer"
                role="button"
                target="_blank"
              >
                <Icon icon="instagram" /> {header}
              </a>

              <a
                className={`${styles.spotify} text-nowrap btn btn-dark`}
                href="https://open.spotify.com/playlist/3EV4meqUK8g5IEYGqxsvNf?si=44648f12a9e04170"
                rel="noopener noreferrer"
                role="button"
                target="_blank"
              >
                <Icon icon="spotify" /> Top Picks 2022
              </a>
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

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts/top-ten-releases", `${slug}.md`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      title: frontmatter.title,
      date: frontmatter.date,
      cover: frontmatter.cover,
      intro: frontmatter.intro,
      header: frontmatter.header,
      insta: frontmatter.insta,
    },
  };
}
