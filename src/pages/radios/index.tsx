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
import { Loading } from "components/Loading";
import { LoadingContext } from "context/loading.context";

export default function RadioPage({ radios }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { loading } = useContext(LoadingContext);
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(radios);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radioBG">
      <PageMetaData title="Radios" description="Guest mixes from homegrown artists." />
      <h1 className={styles.pageHeader}>Radios</h1>

      <h3 className={styles.pageText}>Guest mixes from homegrown artists.</h3>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />

      <SocialGroup icons={["instagram", "soundcloud"]} />

      {loading ? (
        <Loading />
      ) : (
        <div className="row g-3">
          {postCards.map((radio: AllPostProps) => (
            <TextCard key={radio.frontmatter.name} link={`/radios/${radio.slug}`} post={radio} />
          ))}
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const radios = await getPosts("radios");

  return {
    props: {
      radios: radios.sort(sortByMostRecentDate),
    },
  };
};
