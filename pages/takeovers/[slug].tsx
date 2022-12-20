import { marked } from "marked";
import Head from "next/head";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import Footer from "components/Footer";
import { StaticProps } from "types/frontmatter";

export default function TakeoverSlug({
  content,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, artistPage, postLink } = frontmatter;
  return (
    <>
      <Head>
        <title>Takeovers</title>
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

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const markdownWithMeta = fs.readFileSync(path.join("posts/takeovers", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
