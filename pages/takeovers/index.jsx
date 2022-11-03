import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import matter from "gray-matter";
import useFilter from "hooks/useFilter";
import { CardNoText } from "components/Card";
import styles from "styles/page.module.scss";
import SocialIcon from "components/SocialIcon";
import fs from "fs";
import path from "path";
import GoBack from "@/btns/GoBack";

export default function TakeoverPage({ takeovers }) {
  const { error, filter, hasErrored, postCards, setFilter } = useFilter(takeovers);

  const handleSearchChange = (event) => {
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
      <div className="takeoverBG">
        <h1 className={styles.pageHeader}>Plant Bass'd Takeovers</h1>

        <p className={styles.pageText}>
          Artists select and share their top tracks on Spotify. Check out the playlist below.
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
              className={`${styles.spotify} text-nowrap btn btn-dark`}
              href="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              <SocialIcon icon="spotify" /> Plant Bass'd Picks
            </a>
          </div>
        </div>
        <div className="row g-3">
          {postCards.map((takeover) => (
            <CardNoText key={takeover.frontmatter.title} link={`/takeovers/${takeover.slug}`} post={takeover} />
          ))}
        </div>

        <GoBack />
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts/takeovers"));
  const takeovers = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts/takeovers", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace(".md", "");
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
