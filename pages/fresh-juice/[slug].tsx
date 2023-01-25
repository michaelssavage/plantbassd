import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { Slug } from "components/Slug";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";

export default function FreshJuiceSlug({
  frontmatter,
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { artist = "Bandcamp", youtube, title, date, pic, bandcamp, postLink } = frontmatter;
  return (
    <>
      <Head>
        <title>Fresh Juice</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {Slug(date, title, mdxSource)}
            <CardWithButtons
              artist={artist}
              insta="Instagram"
              link={postLink}
              page={bandcamp}
              pic={pic}
              title={title}
            />
          </div>
          {youtube ? (
            <div className="row mt-5">
              <LiteYouTubeEmbed id={youtube} title={title} />
            </div>
          ) : null}
        </div>
      </div>
    </>
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
    },
  };
}
