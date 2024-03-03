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
import { LoadingContext } from "context/loading.context";
import { Loading } from "components/Loading";
import { SocialGroup } from "components/Icon/SocialGroup";

export default function UnderTheRadarPage({
  radars,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { loading } = useContext(LoadingContext);

  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(radars);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radarBG">
      <PageMetaData title="Under The Radar" />
      <h1 className={styles.pageHeader}>Under The Radar</h1>

      <h3 className={styles.pageText}>
        End of month roundups of the releases that might have flown under your radar.
      </h3>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />

      <SocialGroup icons={["instagram", "bandcamp"]} />

      {loading ? (
        <Loading />
      ) : (
        <div className="row g-3">
          {postCards.map((radar: AllPostProps) => (
            <TextCard
              key={radar.frontmatter.name}
              link={`/under-the-radar/${radar.slug}`}
              post={radar}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const radars = await getPosts("under-the-radar");

  return {
    props: {
      radars: radars.sort(sortByMostRecentDate),
    },
  };
};
