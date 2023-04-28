import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useFilter } from "hooks/useFilter.hook";
import { Card } from "components/Card";
import styles from "styles/page.module.scss";
import { SocialButton } from "components/Icon";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";

export default function TakeoverPage({
  takeovers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(takeovers);

  if (hasErrored) return <Error error={error} />;

  return (
    <div className="takeoverBG">
      <PageTitle title="Takeovers" />
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
          <Card
            key={takeover.frontmatter.name}
            link={`/takeovers/${takeover.slug}`}
            post={takeover}
          />
        ))}
      </div>
      <div className="mt-2 text-end">{postCards.length} cards.</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const takeovers = await getPosts("takeovers");

  return {
    props: {
      takeovers: takeovers.sort(sortByDate).reverse(),
    },
  };
};
