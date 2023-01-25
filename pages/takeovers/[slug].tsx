import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";

const components = { HoverLink, Picture };

export default function TakeoverSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, artistPage, postLink } = frontmatter;
  return (
    <>
      <Head>
        <title>Takeovers</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            <div
              className={`${styles.postContent}
							col-lg-6
							col-md-12
							col-xl-6`}
            >
              <p className={styles.postDate}>Posted on {date}</p>
              <h1 className={styles.postTitle}>{title}</h1>
              <div className={styles.postBody}>
                <MDXRemote {...mdxSource} components={components} />
              </div>
            </div>

            <CardWithButtons
              artist="Artist's Insta"
              insta="Instagram"
              link={postLink}
              page={artistPage}
              pic={pic}
              title={title}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugPath("takeovers");

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("takeovers", slug);

  return {
    props: {
      mdxSource,
      frontmatter,
    },
  };
}
