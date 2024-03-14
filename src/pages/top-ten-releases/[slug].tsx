import { MDXRemote } from "next-mdx-remote";
import { Picture } from "components/Picture";
import { SlugProp, StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { HoverLink } from "components/HoverLink";
import styles from "styles/top-ten.module.scss";
import PageMetaData from "components/PageMetaData";
import { FavTrack } from "components/Slug";
import { Icon } from "components/Icon/Icon";
import { Loading } from "components/Loading";

interface TopTenProps {
  frontmatter: {
    cover: string;
  };
}

const components = { HoverLink, Picture, FavTrack };

export default function TopTenSlug({ mdxSource, frontmatter, slug }: SlugProp & TopTenProps) {
  const { title, date, cover, intro, header, insta, path } = frontmatter;
  return (
    <div className={styles.outerSection}>
      <PageMetaData
        title={`${header} - Reviews`}
        imageUrl={cover}
        description={intro}
        url={`www.plantbassd.com/${slug}`}
      />
      <div className={`col ${styles.topTenContent}`}>
        <p>
          {<HoverLink url="/" name="home" />} / {<HoverLink url={`/${path}`} name={path} />} /
        </p>
        <h1 className={styles.postTitle}>{`${header} - ${title}`}</h1>
        <p className={styles.postDate}>Posted on {date}</p>

        <p className="my-4">{intro}</p>
        <a
          className={`${styles.instagram} text-nowrap btn btn-dark mb-3`}
          href={insta}
          rel="noopener noreferrer"
          role="button"
          target="_blank"
        >
          <Icon name="instagram" /> {header}
        </a>
        <div className="text-center">
          <Picture alt="artist press pic" size={600} src={cover} />
        </div>

        <hr />
        <Loading>
          <div className="row">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </Loading>
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
