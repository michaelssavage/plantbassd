import { InferGetStaticPropsType } from "next";
import { StickyCard } from "components/Card";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { Slug } from "components/Slug";
import PageMetaData from "components/PageMetaData";

export default function RadioSlug({
  mdxSource,
  frontmatter,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, artistPage, mixLink, path, bio } = frontmatter;
  return (
    <div className={styles.slugContainer}>
      <PageMetaData
        title={title}
        imageUrl={pic}
        description={bio}
        url={`www.plantbassd.com/${slug}`}
      />
      <div className="row">
        <Slug path={path} date={date} title={title} mdxSource={mdxSource} />

        <StickyCard
          artist="Artist's Insta"
          insta="Listen Now"
          link={mixLink}
          page={artistPage}
          pic={pic}
          title={title}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugPath("radios");

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("radios", slug);

  return {
    props: {
      mdxSource,
      frontmatter,
      slug,
    },
  };
}