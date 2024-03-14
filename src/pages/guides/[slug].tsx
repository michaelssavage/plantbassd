import { MDXRemote } from "next-mdx-remote";
import styles from "styles/top-ten.module.scss";
import { SlugProp, StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import PageMetaData from "components/PageMetaData";
import { GigGuide } from "components/Slug";
import { Loading } from "components/Loading";

const components = { HoverLink, Picture, GigGuide };

export default function Guides({ frontmatter, slug, mdxSource }: SlugProp) {
  const { title, date, path, pic, bio } = frontmatter;
  return (
    <div className={styles.outerSection}>
      <PageMetaData
        title={title.toLowerCase()}
        imageUrl={pic}
        description={bio}
        url={`www.plantbassd.com/${slug}`}
      />
      <Loading>
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
      </Loading>
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
      frontmatter,
      slug,
    },
  };
}
