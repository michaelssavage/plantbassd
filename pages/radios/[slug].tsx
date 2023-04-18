import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { CardWithButtons } from "components/Card";
import { Picture } from "components/Picture";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";
import { Slug } from "components/Slug";

export default function RadioSlug({
  mdxSource,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, tracklist, artistPage, mixLink, path } = frontmatter;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            {
              <Slug path={path} date={date} title={title} mdxSource={mdxSource}>
                <div className={styles.imgWrapper}>
                  <Picture alt="artist tracklist" size={600} src={tracklist} />
                </div>
              </Slug>
            }

            <CardWithButtons
              artist="Artist's Insta"
              insta="Listen Now"
              link={mixLink}
              page={artistPage}
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
    },
  };
}
