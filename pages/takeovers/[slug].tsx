import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { Slug } from "components/Slug";

export default function TakeoverSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, artistPage, path, postLink } = frontmatter;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {Slug({ path, date, title, mdxSource })}

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
