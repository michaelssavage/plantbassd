import { GetStaticProps } from "next/types";

import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { PostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { SocialGroup } from "components/Icon";

import { Loading } from "components/Loading";
import { useBatch } from "hooks/useBatch.hook";
import { Showbox } from "components/Button";

export default function PremieresPage({ premieres }: { premieres: PostProps[] }) {
  const { filesToShow, handleLoadMore, handleLoadAll } = useBatch(premieres);

  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter<PostProps>(filesToShow);

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
          {postCards.map((premiere) => (
            <TextCard
              key={premiere.frontmatter.name}
              link={`/premieres/${premiere.slug}`}
              post={premiere}
            />
          ))}
        </div>
      </Loading>

      <Showbox handleLoadMore={handleLoadMore} handleLoadAll={handleLoadAll} />
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
