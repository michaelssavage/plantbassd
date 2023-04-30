import { InferGetStaticPropsType } from "next";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { Slug } from "components/Slug";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import PageTitle from "components/PageTitle";

export default function PremieresSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, seeMore, listen, postLink, path, youtube } = frontmatter;

  return (
    <div className={styles.newsSection}>
      <PageTitle title={title} />
      <div className="row">
        {Slug({ path, date, title, mdxSource })}
        <CardWithButtons
          artist={listen}
          insta="Instagram"
          link={postLink}
          page={seeMore}
          pic={pic}
          title={title}
        />
      </div>
      {youtube && (
        <div className="row mt-5">
          <LiteYouTubeEmbed id={youtube} title={title} />
        </div>
      )}
    </div>
  );
}
export async function getStaticPaths() {
  const paths = await getSlugPath("premieres");

  return {
    fallback: false,
    paths,
  };
}
export async function getStaticProps({ params: { slug } }: StaticProps) {
  const { frontmatter, mdxSource } = await getSlugContent("premieres", slug);

  return {
    props: {
      mdxSource,
      frontmatter,
    },
  };
}
