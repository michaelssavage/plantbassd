import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import matter from "gray-matter";
import { ChangeEvent } from "react";
import path from "path";
import fs from "fs";
import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import Footer from "components/Footer";
import useFilter from "hooks/useFilter";
import { CardNoText } from "components/Card";
import styles from "styles/page.module.scss";
import SocialIcon from "components/SocialIcon";
import GoBack from "components/GoBack";
import { AllPostProps } from "types/frontmatter";

export default function PremieresPage({
  premieres,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, setFilter } = useFilter(premieres);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Premieres</title>
      </Head>

      <div className="radioBG">
        <h1 className={styles.pageHeader}>Plant Bass'd Premieres</h1>

        <p className={styles.pageText}>
          New track premieres from around the world. Listen to the {premieres.length} tunes on our
          SoundCloud.
        </p>
        <div className="row align-items-center">
          <div className={`col-md-4 me-auto input-group ${styles.radioFilter}`}>
            <input
              aria-label="Filter"
              className="form-control"
              onChange={handleSearchChange}
              placeholder="Filter Artists By Name..."
              type="text"
              value={filter}
            />
          </div>

          <div className={`col-auto ${styles.socialBtns}`}>
            <a
              className={`${styles.soundcloud} text-nowrap btn btn-dark`}
              href="https://soundcloud.com/plantbassddjs/sets/plant-bassd-premieres"
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              <SocialIcon icon="soundcloud" /> Premieres
            </a>
          </div>
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
