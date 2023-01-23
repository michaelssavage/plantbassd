import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import Footer from "components/Footer";
import { useFilter } from "hooks/useFilter.hook";
import { CardNoText } from "components/Card";
import styles from "styles/page.module.scss";
import SocialIcon from "components/SocialIcon";
import GoBack from "components/GoBack";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";

export default function FreshJuicePage({
  freshjuice,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(
    freshjuice,
    "posts"
  );

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
          <SearchBox
            handleSearchChange={handleSearchChange}
            filter={filter}
            style={`col-md-4 me-auto input-group ${styles.radioFilter}`}
            text="artists by name"
          />

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
