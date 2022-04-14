import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import SearchBox from "components/SearchBox";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import useFilter from "hooks/useFilter";

import CardNoText from "@/cards/CardNoText";
import GoBack from "@/btns/GoBack";
import SocialMediaBtn from "@/btns/SocialMediaBtn";
import styles from "@/pageStyle/page.module.scss";

export default function FreshJuicePage({ freshjuice }) {
  const { error, filter, hasErrored, postCards, setFilter } =
      useFilter(freshjuice),
    handleSearchChange = (event) => {
      setFilter(event.target.value);
    };

  if (hasErrored) {
    return <Error error={error} />;
  }
  return (
    <>
      <Head>
        <title>Plant Bass'd Fresh Juice</title>
      </Head>
      <div className={styles.freshjuiceBG}>
        <div className="container">
          <h1 className={styles.pageHeader}>Fresh Juice</h1>

          <p className={styles.pageText}>
            New music releases from around the world that we've highlighted.
          </p>
          <div className={styles.searchBox}>
            <SearchBox
              filter={filter}
              setFilter={handleSearchChange}
              styling={styles.searchFilter}
            />
            <SocialMediaBtn
              icon="bandcamp"
              link="https://bandcamp.com/oisincampbellbap"
              styling={styles.bandcamp}
              title="Our Bandcamp Collection"
            />
          </div>
          <div className="row g-3">
            {postCards.map((radio) => (
              <CardNoText
                key={radio.frontmatter.title}
                link={`/fresh-juice/${radio.slug}`}
                post={radio}
              />
            ))}
          </div>

          <GoBack />
        </div>
      </div>

      <Footer />
    </>
  );
}
// eslint-disable-next-line func-style, require-await
export async function getStaticProps() {
  // Get files from the takeover directory
  const files = fs.readdirSync(path.join("posts/fresh-juice")),
    // Get Slug and frontmatter from posts
    freshjuice = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
          path.join("posts/fresh-juice", filename),
          "utf-8"
        ),
        { data: frontmatter } = matter(markdownWithMeta),
        slug = filename.replace(".md", "");

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

FreshJuicePage.propTypes = {
  freshjuice: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
