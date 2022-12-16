import Head from "next/head";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { CardWithButtons } from "components/Card";
import styles from "styles/slug.module.scss";
import Footer from "components/Footer";
import Content from "components/SlugContent";

interface PremieresSlugProps {
  content: string;
  frontmatter: {
    title: string;
    date: string;
    pic: string;
    seeMore: string;
    postLink: string;
  };
}

export default function PremieresSlug({ content, frontmatter }: PremieresSlugProps) {
  const { title, date, pic, seeMore, postLink, youtube } = frontmatter;

  return (
    <>
      <Head>
        <title>Premieres</title>
      </Head>
      <div className={styles.newsSection}>
        <div className="container">
          <div className="row">
            <Content content={content} date={date} title={title} />
            <CardWithButtons
              artist="See More"
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title={title}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/premieres"));
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
  const markdownWithMeta = fs.readFileSync(path.join("posts/premieres", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
