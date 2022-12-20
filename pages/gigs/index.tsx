import Head from "next/head";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import FilterTags from "components/FilterTags";
import Footer from "components/Footer";
import useFilterTags from "hooks/useFilterTags";
import { CardNoText } from "components/Card";
import styles from "styles/page.module.scss";
import GoBack from "components/GoBack";
import { AllPostProps } from "types/frontmatter";

const gigsTags = [
  { name: "edinburgh", value: false },
  { name: "glasgow", value: false },
  { name: "dublin", value: false },
];

export default function GigsPage({ gigs }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, handleTags, hasErrored, newsStories, tagList } = useFilterTags(
    gigsTags,
    "gig",
    gigs
  );

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Gigs</title>
      </Head>
      <div className="gigsBG">
        <h1 className={styles.pageHeader}>Plant Bass'd Gigs</h1>

        <p className={styles.pageText}>
          Check out some of the {newsStories.length} shows we've put together in Ireland and the UK:
        </p>

        <FilterTags handleTags={handleTags} tagList={tagList} />

        <div className="row g-3">
          {newsStories.map((gig: AllPostProps) => (
            <CardNoText
              key={gig.frontmatter.name}
              link={`/${gig.frontmatter.path}/${gig.slug}`}
              post={gig}
            />
          ))}
        </div>

        <GoBack />
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Get files from the takeover directory
  const files = fs.readdirSync(path.join("posts/gigs"));
  const gigs = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts/gigs", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace(".md", "");

    return {
      frontmatter,
      slug,
    };
  });

  return {
    props: {
      gigs: gigs.sort(sortByDate).reverse(),
    },
  };
}
