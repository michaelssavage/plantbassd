import { StickyCard } from "components/Card";
import { Slug } from "components/Slug";
import { SlugProp, StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import PageMetaData from "components/PageMetaData";
import { Shell } from "components/Slug/Shell";

export default function NewsSlug({ mdxSource, frontmatter, slug }: SlugProp) {
  const { title, date, pic, tickets, seeMore, path, postLink, bio } = frontmatter;

  const buyLink = tickets ? tickets : seeMore || "";
  const buyText = tickets ? "RA tickets" : "See More";

  return (
    <Shell>
      <PageMetaData
        title={title}
        imageUrl={pic}
        description={bio}
        url={`www.plantbassd.com/${slug}`}
      />
      <div className="row">
        {Slug({ path, date, title, mdxSource })}
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
      slug,
    },
  };
}
