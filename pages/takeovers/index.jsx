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

export default function TakeoverPage({ takeovers }) {
  const { error, filter, hasErrored, postCards, setFilter } =
      useFilter(takeovers),
    handleSearchChange = (event) => {
      setFilter(event.target.value);
    };

  if (hasErrored) {
    return <Error error={error} />;
  }
  return (
    <>
      <Head>
        <title>Plant Bass'd Takeovers</title>
      </Head>
      <div className={styles.takeoverBG}>
        <div className="container">
          <h1 className={styles.pageHeader}>Plant Bass'd Takeovers</h1>

          <p className={styles.pageText}>
            Artists select and share their top tracks on Spotify. Check out the
            playlist below.
          </p>
          <div className={styles.searchBox}>
            <SearchBox
              filter={filter}
              setFilter={handleSearchChange}
              styling={styles.searchFilter}
            />
            <SocialMediaBtn
              icon="spotify"
              link="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
              styling={styles.spotify}
              title="Plant Bass'd Picks"
            />
          </div>
          <div className="row g-3">
            {postCards.map((takeover) => (
              <CardNoText
                key={takeover.frontmatter.title}
                link={`/takeovers/${takeover.slug}`}
                post={takeover}
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
  const files = fs.readdirSync(path.join("posts/takeovers")),
    takeovers = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
          path.join("posts/takeovers", filename),
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
      takeovers: takeovers.sort(sortByDate).reverse(),
    },
  };
}

TakeoverPage.propTypes = {
  takeovers: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
