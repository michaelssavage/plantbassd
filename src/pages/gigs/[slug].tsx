import { InferGetStaticPropsType } from "next";
import { StickyCard } from "components/Card";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { Slug } from "components/Slug";
import { ArtistLookUp } from "components/ArtistLookUp";
import PageMetaData from "components/PageMetaData";
import { getPosts } from "utils/getPosts";
import { Shell } from "components/Slug/Shell";

export default function GigsSlug({
  mdxSource,
  frontmatter,
  gigs,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, tickets, seeMore, postLink, path, anames, bio } = frontmatter;

  const buyLink = tickets ? tickets : seeMore;
  const buyText = tickets ? "Tickets" : "See More";

  return (
    <Shell>
      <PageMetaData
        title={title}
        imageUrl={pic}
        description={bio}
        url={`www.plantbassd.com/${slug}`}
      />
      <div className="row">
        {
          <Slug path={path} date={date} title={title} mdxSource={mdxSource}>
            <ArtistLookUp anames={anames} gigs={gigs} current={tickets} />
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
    </Shell>
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
  const gigs = await getPosts("gigs");

  return {
    props: {
      frontmatter,
      mdxSource,
      gigs,
      slug,
    },
  };
}
