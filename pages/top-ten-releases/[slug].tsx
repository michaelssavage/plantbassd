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
