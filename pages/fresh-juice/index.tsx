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

export default function FreshJuicePage({
  freshjuice,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, setFilter } = useFilter(freshjuice);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Fresh Juice</title>
      </Head>
      <div className="freshjuiceBG">
        <h1 className={styles.pageHeader}>Fresh Juice</h1>

        <p className={styles.pageText}>
          Read about the {postCards.length} new music releases from around the world that we
          couldn't get enough of.
        </p>

        <div className="row align-items-center">
          {/* SEARCH BOX */}
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
              className={`${styles.bandcamp} btn btn-dark`}
              href="https://bandcamp.com/oisincampbellbap"
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              <SocialIcon icon="bandcamp" /> Bandcamp
            </a>
          </div>
        </div>

        <div className="row g-3">
          {postCards.map((juice: AllPostProps) => (
            <CardNoText
              key={juice.frontmatter.name}
              link={`/fresh-juice/${juice.slug}`}
              post={juice}
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
  const files = fs.readdirSync(path.join("posts/fresh-juice"));
  const freshjuice = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts/fresh-juice", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace(".md", "");

    return {
      frontmatter,
      slug,
    };
  });

  return {
    props: {
      freshjuice: freshjuice.sort(sortByDate).reverse(),
    },
  };
}