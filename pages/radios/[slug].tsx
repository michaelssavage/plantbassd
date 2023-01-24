import { marked } from "marked";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { CardWithButtons } from "components/Card";
import { Picture } from "components/Picture";
import styles from "styles/slug.module.scss";
import { StaticProps } from "types/frontmatter";
import { getSlugContent, getSlugPath } from "utils/getSlug";

export default function RadioSlug({
  content,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, pic, tracklist, artistPage, mixLink } = frontmatter;
  return (
    <>
      <Head>
        <title>Mixes</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            <div
              className={`${styles.postContent}
							col-lg-6
							col-md-12
							col-xl-6`}
            >
              <p className={styles.postDate}>Posted on {date}</p>
              <h1 className={styles.postTitle}>{title}</h1>
              <div className={styles.postBody}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(content),
                  }}
                />
              </div>
              <div className={styles.imgWrapper}>
                <Picture alt="artist tracklist" size={600} src={tracklist} />
              </div>
            </div>

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
  const { frontmatter, content } = await getSlugContent("radios", slug);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
