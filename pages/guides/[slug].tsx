import { MDXRemote } from "next-mdx-remote";

import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import styles from "styles/slug.module.scss";
import GoBack from "components/GoBack";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";

const components = { HoverLink, Picture };

export default function Guides({
  title,
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
              <MDXRemote {...mdxSource} components={components} />
            </div>
          </div>
          <GoBack />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugPath("guides");

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("guides", slug);

  return {
    props: {
      mdxSource,
      title: frontmatter.title,
    },
  };
}
