import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { useContext } from "react";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { SocialGroup } from "components/Icon";
import { LoadingContext } from "context/loading.context";
import { Loading } from "components/Loading";

export default function TakeoverPage({
  takeovers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { loading } = useContext(LoadingContext);
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(takeovers);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="takeoverBG">
      <PageMetaData
        title="Takeovers"
        description="Artists, Friends, and Guests select and share their top tracks on Spotify."
      />
      <h1 className={styles.pageHeader}>Takeovers</h1>

      <h3 className={styles.pageText}>
        Artists, Friends, and Guests select and share their top tracks on Spotify. Check out the
        playlist below.
      </h3>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />

      <SocialGroup icons={["instagram", "spotify"]} />

      {loading ? (
        <Loading />
      ) : (
        <div className="row g-3">
          {postCards.map((takeover: AllPostProps) => (
            <TextCard
              key={takeover.frontmatter.name}
              link={`/takeovers/${takeover.slug}`}
              post={takeover}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const takeovers = await getPosts("takeovers");

  return {
    props: {
      takeovers: takeovers.sort(sortByMostRecentDate),
    },
  };
};
