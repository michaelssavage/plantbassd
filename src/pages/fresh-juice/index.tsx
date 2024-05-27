import { GetStaticProps } from "next";
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

import { Showbox } from "components/Button";
import { useBatch } from "hooks/useBatch.hook";

export default function FreshJuicePage({ freshjuice }: { freshjuice: PostProps[] }) {
  const { filesToShow, handleLoadMore, handleLoadAll } = useBatch(freshjuice);

  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter<PostProps>(filesToShow);

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

      <div className="row g-3">
        {postCards.map((juice) => (
          <TextCard key={juice.frontmatter.name} link={`/fresh-juice/${juice.slug}`} post={juice} />
        ))}
      </div>

      <Showbox handleLoadMore={handleLoadMore} handleLoadAll={handleLoadAll} />
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
