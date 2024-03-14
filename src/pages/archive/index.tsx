import { GetStaticProps } from "next/types";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { PostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getAllPosts } from "utils/getAllPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { SocialGroup } from "components/Icon";
import { Loading } from "components/Loading";
import { Showbox } from "components/Button";
import { useBatch } from "hooks/useBatch.hook";

export default function ArchivePage({ files }: { files: PostProps[] }) {
  const { filesToShow, handleLoadMore, handleLoadAll } = useBatch(files);

  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter<PostProps>(filesToShow);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="archiveBG">
      <PageMetaData title="Archive" />
      <h1 className={styles.pageHeader}>Archive</h1>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />

      <SocialGroup icons={["instagram", "email"]} />

      <Loading>
        <div className="row g-2">
          {postCards.map((story) => (
            <TextCard
              key={story.frontmatter.name}
              link={`/${story.frontmatter.path}/${story.slug}`}
              post={story}
            />
          ))}
        </div>
        <Showbox handleLoadMore={handleLoadMore} handleLoadAll={handleLoadAll} />
      </Loading>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllPosts();

  return {
    props: {
      files: files.sort(sortByMostRecentDate),
    },
  };
};
