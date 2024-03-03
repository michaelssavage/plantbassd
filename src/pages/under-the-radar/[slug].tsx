import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import styles from "styles/top-ten.module.scss";
import { MusicRelease } from "components/Slug";
import { Picture } from "components/Picture";
import { HoverLink } from "components/HoverLink";
import PageMetaData from "components/PageMetaData";
import { SoundCloud } from "components/Players";
import { Loading } from "components/Loading";

const components = { HoverLink, MusicRelease, SoundCloud };

export default function UnderTheRadarSlug(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { month, date, bio, pic, mdxSource, path } = props;
  return (
    <div className={styles.outerSection}>
      <PageMetaData title={`Under the Radar - ${month}`} />
      <div className={`col ${styles.topTenContent}`}>
        <div className="px-3">
          <p>
            {<HoverLink url="/" name="home" />} / {<HoverLink url={`/${path}`} name={path} />} /
          </p>
          <p className={styles.postDate}>Posted on {date}</p>
        </div>
        <Picture alt="cover pic" size={1200} src={pic} />

        <h1 className={styles.postTitle} style={{ marginTop: "1rem" }}>
          Under the Radar - {month}
        </h1>

        <p className={styles.bioText}>{bio}</p>

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
  const paths = await getSlugPath("under-the-radar");

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("under-the-radar", slug);

  return {
    props: {
      mdxSource,
      month: frontmatter.month,
      date: frontmatter.date,
      bio: frontmatter.bio,
      pic: frontmatter.pic,
      path: frontmatter.path,
    },
  };
}
