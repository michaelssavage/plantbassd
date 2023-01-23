import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { sortByDate } from "utils";
import Error from "components/Error";
import Footer from "components/Footer";
import { useFilter } from "hooks/useFilter.hook";
import { CardNoText } from "components/Card";
import styles from "styles/page.module.scss";
import { SocialButton } from "components/Icon";
import GoBack from "components/GoBack";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";

export default function PremieresPage({
  premieres,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(
    premieres,
    "posts"
  );

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Premieres</title>
      </Head>

      <div className="radioBG">
        <h1 className={styles.pageHeader}>Premieres</h1>

        <p className={styles.pageText}>
          New track premieres from around the world. Listen to the {premieres.length} tunes on our
          SoundCloud.
        </p>
        <div className="row align-items-center">
          <SearchBox
            handleSearchChange={handleSearchChange}
            filter={filter}
            style={`col-md-4 me-auto input-group ${styles.radioFilter}`}
            text="artists by name"
          />

          <SocialButton
            name="Premieres"
            url="https://soundcloud.com/plantbassddjs/sets/plant-bassd-premieres"
            style={`${styles.soundcloud} text-nowrap btn btn-dark`}
          />
        </div>
        <div className="row g-3">
          {postCards.map((premiere: AllPostProps) => (
            <CardNoText
              key={premiere.frontmatter.name}
              link={`/premieres/${premiere.slug}`}
              post={premiere}
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
  const files = fs.readdirSync(path.join("posts/premieres"));
  const premieres = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts/premieres", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace(".md", "");

    return {
      frontmatter,
      slug,
    };
  });

  return {
    props: {
      premieres: premieres.sort(sortByDate).reverse(),
    },
  };
}
