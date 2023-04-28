import { MDXRemote } from "next-mdx-remote";

import { InferGetStaticPropsType } from "next";
import styles from "styles/slug.module.scss";

import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import PageTitle from "components/PageTitle";

const components = { HoverLink, Picture };

export default function Guides({
  title,
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.newsSection}>
      <PageTitle title="Reviews" />
      <div className="container">
        <div className={`col ${styles.topTenContent}`}>
          <h1 className={styles.postTitle}>{title}</h1>
          <div className={styles.postBody}>
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </div>
      </div>
    </div>
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
