import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { CardCover } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";
import { SocialButton } from "components/Icon";
import { plantbassdInstagram } from "utils/constants";

export default function TakeoverPage({
  takeovers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(takeovers);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="takeoverBG">
      <PageTitle title="Takeovers" />
      <h1 className={styles.pageHeader}>Plant Bass'd Takeovers</h1>

      <h3 className={styles.pageText}>
        Artists, Friends, and Guests select and share their top tracks on Spotify. Check out the
        playlist below.
      </h3>
      <SocialButton
        name="spotify"
        url="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
      />
      <SocialButton name="instagram" url={plantbassdInstagram} />

      <SearchBox handleSearchChange={handleSearchChange} filter={filter} />

      <div className="row g-3">
        {postCards.map((takeover: AllPostProps) => (
          <CardCover
            key={takeover.frontmatter.name}
            link={`/takeovers/${takeover.slug}`}
            post={takeover.frontmatter}
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
