import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import { Slug } from "components/Slug";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";

export default function PremieresSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, seeMore, listen, postLink, youtube } = frontmatter;

  return (
    <>
      <Head>
        <title>Premieres</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {Slug(date, title, mdxSource)}
            <CardWithButtons
              artist={listen}
              insta="Instagram"
              link={postLink}
              page={seeMore}
              pic={pic}
              title={title}
            />
          </div>
          <div className="row mt-5">
            {youtube ? (
              <iframe
                src={youtube}
                width={560}
                height={720}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
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
