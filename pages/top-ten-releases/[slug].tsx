import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { Picture } from "components/Picture";
import { Icon } from "components/Icon";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { HoverLink } from "components/HoverLink";
import styles from "styles/top-ten.module.scss";
import PageMetaData from "components/PageMetaData";
import { FavTrack } from "components/Slug";

const components = { HoverLink, Picture, FavTrack };

export default function TopTenSlug({
  mdxSource,
  frontmatter,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, cover, intro, header, insta } = frontmatter;
  return (
    <div className={styles.outerSection}>
      <PageMetaData
        title={`${header} - Reviews`}
        imageUrl={cover}
        description={intro}
        url={`www.plantbassd.com/${slug}`}
      />
      <div className={`col ${styles.topTenContent}`}>
        <p className={styles.postDate}>Posted on {date}</p>
        <a
          className={`${styles.instagram} text-nowrap btn btn-dark`}
          href={insta}
          rel="noopener noreferrer"
          role="button"
          target="_blank"
        >
          <Icon icon="instagram" /> {header}
        </a>
        <h1 className={styles.postTitle}>{`${header} - ${title}`}</h1>

        <div className="text-center">
          <p>{intro}</p>
          <Picture alt="artist press pic" size={600} src={cover} />
        </div>

        <hr />

        <div className="row">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugPath("top-ten-releases");

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("top-ten-releases", slug);

  return {
    props: {
      mdxSource,
      frontmatter,
      slug,
    },
  };
}
