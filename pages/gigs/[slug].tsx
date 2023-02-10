import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { guestList, headliners } from "arrays/previous-guests";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { Slug } from "components/Slug";
import { ArtistLookUp } from "components/ArtistLookUp";

const djs = guestList.concat(headliners);

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
        <title>{title}</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {
              <Slug date={date} title={title} mdxSource={mdxSource}>
                {ArtistLookUp(anames, djs)}
              </Slug>
            }
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
