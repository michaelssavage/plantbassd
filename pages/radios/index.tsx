import Head from "next/head";
import { GetStaticProps } from "next";
import matter from "gray-matter";
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
import { RadiosProps } from "types/frontmatter";

export default function RadioPage({ radios }: RadiosProps[]) {
  const { error, filter, hasErrored, postCards, setFilter } = useFilter(radios);

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  if (hasErrored) {
    return <Error error={error} />;
  }

  return (
    <>
      <Head>
        <title>Mixes</title>
      </Head>

      <div className="radioBG">
        <h1 className={styles.pageHeader}>Plant Bass'd Mixes</h1>

        <p className={styles.pageText}>
          Guest mixes from homegrown and international artists. Check them out on our SoundCloud.
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
              className={`${styles.soundcloud} text-nowrap btn btn-dark`}
              href="https://soundcloud.com/plantbassddjs/sets/plant-bassd-radio"
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              <SocialIcon icon="radio" /> Plant Bass'd Radio
            </a>
          </div>
        </div>
        <div className="row g-3">
          {postCards.map((radio) => (
            <CardNoText key={radio.frontmatter.name} link={`/radios/${radio.slug}`} post={radio} />
          ))}
        </div>

        <GoBack />
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps(): GetStaticProps {
  const files = fs.readdirSync(path.join("posts/radios"));
  const radios = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts/radios", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace(".md", "");

    return {
      frontmatter,
      slug,
    };
  });

  return {
    props: {
      radios: radios.sort(sortByDate).reverse(),
    },
  };
}
