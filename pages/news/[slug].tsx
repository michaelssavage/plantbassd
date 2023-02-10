import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { Slug } from "components/Slug";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";

export default function NewsSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, tickets, seeMore, postLink } = frontmatter;

  let buyLink = seeMore,
    buyText = "See More";

  if (tickets) {
    buyLink = tickets;
    buyText = "RA tickets";
  }

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {Slug({ date, title, mdxSource })}
            <CardWithButtons
              artist={buyText}
              insta="Instagram"
              link={postLink}
              page={buyLink}
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
  const paths = await getSlugPath("news");

  return {
    fallback: false,
    paths,
  };
}
export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("news", slug);

  return {
    props: {
      mdxSource,
      frontmatter,
    },
  };
}
