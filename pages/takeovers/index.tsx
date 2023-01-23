import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import matter from "gray-matter";
import { GetStaticProps } from "next/types";
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

export default function TakeoverPage({
  takeovers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(
    takeovers,
    "posts"
  );

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Takeovers</title>
      </Head>
      <div className="takeoverBG">
        <h1 className={styles.pageHeader}>Plant Bass'd Takeovers</h1>

        <p className={styles.pageText}>
          Artists, Friends, and Guests select and share their top tracks on Spotify. Check out the
          playlist below.
        </p>
        <div className="row align-items-center">
          <SearchBox
            handleSearchChange={handleSearchChange}
            filter={filter}
            style={`col-md-4 me-auto input-group ${styles.radioFilter}`}
            text="artists by name"
          />

          <SocialButton
            name="Plant Bass'd Picks"
            icon="spotify"
            url="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
            style={`${styles.spotify} text-nowrap btn btn-dark`}
          />
        </div>
        <div className="row g-3">
          {postCards.map((takeover: AllPostProps) => (
            <CardNoText
              key={takeover.frontmatter.name}
              link={`/takeovers/${takeover.slug}`}
              post={takeover}
            />
          ))}
        </div>

        <GoBack />
      </div>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
};
