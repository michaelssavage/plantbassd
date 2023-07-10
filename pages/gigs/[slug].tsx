import { InferGetStaticPropsType } from "next";
import { StickyCard } from "components/Card";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { Slug } from "components/Slug";
import { ArtistLookUp } from "components/ArtistLookUp";
import PageTitle from "components/PageTitle";

export default function GigsSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, tickets, seeMore, postLink, path, anames } = frontmatter;

  let buyLink = seeMore,
    buyText = "See More";

  if (tickets) {
    buyLink = tickets;
    buyText = "RA tickets";
  }

  return (
    <div className={styles.newsSection}>
      <PageTitle title={title} />
      <div className="row">
        {
          <Slug path={path} date={date} title={title} mdxSource={mdxSource}>
            <ArtistLookUp anames={anames} />
          </Slug>
        }
        <StickyCard
          artist={buyText}
          insta="Instagram"
          link={postLink}
          page={buyLink}
          pic={pic}
          title={title}
        />
      </div>
    </div>
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
