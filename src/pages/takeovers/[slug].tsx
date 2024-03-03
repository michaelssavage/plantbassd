import { InferGetStaticPropsType } from "next";
import { StickyCard } from "components/Card";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { Slug } from "components/Slug";
import PageMetaData from "components/PageMetaData";
import { Shell } from "components/Slug/Shell";

export default function TakeoverSlug({
  mdxSource,
  frontmatter,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, artistPage, path, postLink, bio } = frontmatter;
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
          artist="Artist's Insta"
          insta="Instagram"
          link={postLink}
          page={artistPage}
          pic={pic}
          title={title}
        />
      </div>
    </Shell>
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
      slug,
    },
  };
}
