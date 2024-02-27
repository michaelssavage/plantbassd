import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import { StickyCard } from "components/Card";
import styles from "styles/slug.module.scss";
import { Slug } from "components/Slug";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import PageMetaData from "components/PageMetaData";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function FreshJuiceSlug({
  frontmatter,
  mdxSource,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    artist = "Bandcamp",
    youtube,
    title,
    date,
    pic,
    bandcamp,
    path,
    postLink,
    bio,
  } = frontmatter;
  return (
    <div className={styles.slugContainer}>
      <PageMetaData
        title={title}
        imageUrl={pic}
        description={bio}
        url={`www.plantbassd.com/${slug}`}
      />
      <div className="row">
        {Slug({ path, date, title, mdxSource })}
        <StickyCard
          artist={artist}
          insta="Instagram"
          link={postLink}
          page={bandcamp}
          pic={pic}
          title={title}
        />
      </div>
      {youtube && (
        <div className="row mt-5">
          <ReactPlayer url={youtube} width="100%" height="500px" controls />
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugPath("fresh-juice");

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("fresh-juice", slug);
  return {
    props: {
      frontmatter,
      mdxSource,
      slug,
    },
  };
}
