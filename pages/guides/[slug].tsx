import { marked } from "marked";
import Head from "next/head";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import styles from "styles/slug.module.scss";
import Footer from "components/Footer";
import GoBack from "components/GoBack";

interface GuidesProps {
  content: string;
  title: string;
}

export default function Guides({ title, content }: GuidesProps) {
  return (
    <>
      <Head>
        <title>Reviews</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className={`col ${styles.topTenContent}`}>
            <h1 className={styles.postTitle}>{title}</h1>
            <div className={styles.postBody}>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(content),
                }}
              />
            </div>
          </div>
          <GoBack />
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/guides"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts/guides", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      title: frontmatter.title,
    },
  };
}
