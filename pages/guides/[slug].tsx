import { MDXRemote } from "next-mdx-remote";

import { InferGetStaticPropsType } from "next";
import styles from "styles/top-ten.module.scss";

import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import PageTitle from "components/PageTitle";
import { GigGuide } from "components/Slug";

const components = { HoverLink, Picture, GigGuide };

export default function Guides({
  title,
  date,
  path,
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.outerSection}>
      <PageTitle title={title.toLowerCase()} />
      <div className={`col ${styles.topTenContent}`}>
        <div className="px-3">
          <p>
            {<HoverLink url="/" name="home" />} / {<HoverLink url={`/${path}`} name={path} />} /
          </p>
          <p className={styles.postDate}>Posted on {date}</p>
        </div>
        <h1 className={styles.postTitle}>{title}</h1>

        <div className="row">
          <MDXRemote {...mdxSource} components={components} />
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
      date: frontmatter.date,
      path: frontmatter.path,
    },
  };
}
