import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";

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

export default function PremieresPage({
  premieres,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(premieres);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radioBG">
      <PageMetaData
        title="Premieres"
        description="Listen to new track premieres from around the world on our SoundCloud."
      />
      <h1 className={styles.pageHeader}>Premieres</h1>
      <h3 className={styles.pageText}>
        Listen to new track premieres from around the world on our SoundCloud.
      </h3>
      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />
      <SocialGroup icons={["instagram", "soundcloud"]} />

      <Loading>
        <div className="row g-3">
          {postCards.map((premiere: AllPostProps) => (
            <TextCard
              key={premiere.frontmatter.name}
              link={`/premieres/${premiere.slug}`}
              post={premiere}
            />
          ))}
        </div>
      </Loading>
      <div className="mt-2 text-end">{premieres.length} cards.</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const premieres = await getPosts("premieres");

  return {
    props: {
      premieres: premieres.sort(sortByMostRecentDate),
    },
  };
};
