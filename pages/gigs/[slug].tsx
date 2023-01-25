import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { Gigs } from "components/Gigs";
import { getSlugContent, getSlugPath } from "utils/getSlug";

export default function GigsSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, tickets, seeMore, postLink, anames } = frontmatter;

  let buyLink = seeMore,
    buyText = "See More";

  if (tickets) {
    buyLink = tickets;
    buyText = "RA tickets";
  }

  return (
    <>
      <Head>
        <title>Plant Bass'd Gigs</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {Gigs(anames, mdxSource, date, title)}
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
  const paths = await getSlugPath("gigs");

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("gigs", slug);

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  };
}
