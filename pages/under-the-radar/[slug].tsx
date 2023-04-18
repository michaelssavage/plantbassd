import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import styles from "styles/top-ten.module.scss";
import { Content } from "components/Slug";
import { Picture } from "components/Picture";
import { HoverLink } from "components/HoverLink";

const components = { Content };

export default function UnderTheRadarSlug(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { month, date, bio, pic, mdxSource, path } = props;
  return (
    <>
      <Head>
        <title>{`Under the Radar - ${month}`}</title>
      </Head>
      <div className={styles.outerSection}>
        <div className="container">
          <div className={`col ${styles.topTenContent}`}>
            <p>
              {<HoverLink url="/" name="home" inline />} /{" "}
              {<HoverLink url={`/${path}`} name={path} inline />} /
            </p>
            <p className={styles.postDate}>Posted on {date}</p>
            <Picture alt="cover pic" size={1200} src={pic} />

            <h1 className={styles.postTitle} style={{ marginTop: "1rem" }}>
              Under the Radar - {month}
            </h1>

            <p>{bio}</p>

            <hr />

            <div className={styles.postBody}>
              <MDXRemote {...mdxSource} components={components} />
            </div>
          </div>
        </div>
      </div>
    </>
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
