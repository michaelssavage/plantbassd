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
import { SocialGroup } from "components/Icon/SocialGroup";
import { LoadingContext } from "context/loading.context";
import { Loading } from "components/Loading";

export default function FreshJuicePage({
  freshjuice,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { loading } = useContext(LoadingContext);
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(freshjuice);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="freshjuiceBG">
      <PageMetaData
        title="Fresh Juice"
        description=" Supporting underground artists with reviews of hot new music from around the world. See more
        on our Bandcamp below."
      />
      <h1 className={styles.pageHeader}>Fresh Juice</h1>
      <h3 className={styles.pageText}>
        Supporting underground artists with reviews of hot new music from around the world. See more
        on our Bandcamp below.
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
          {postCards.map((juice: AllPostProps) => (
            <TextCard
              key={juice.frontmatter.name}
              link={`/fresh-juice/${juice.slug}`}
              post={juice}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const freshjuice = await getPosts("fresh-juice");

  return {
    props: {
      freshjuice: freshjuice.sort(sortByMostRecentDate),
    },
  };
};
