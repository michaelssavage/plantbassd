import { marked } from "marked";
import Head from "next/head";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { CardWithButtons } from "components/Card";
import { Picture } from "components/Picture";
import styles from "styles/slug.module.scss";
import Footer from "components/Footer";

interface RadioSlugProps {
  content: string;
  frontmatter: {
    title: string;
    date: string;
    pic: string;
    tracklist: string;
    artistPage: string;
    mixLink: string;
  };
}

export default function RadioSlug({ content, frontmatter }: RadioSlugProps) {
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
                <Picture alt="artist tracklist" height={600} src={tracklist} width={600} />
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

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/radios"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }): GetStaticProps {
  const markdownWithMeta = fs.readFileSync(path.join("posts/radios", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
