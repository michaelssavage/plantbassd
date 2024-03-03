import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { useContext } from "react";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getAllPosts } from "utils/getAllPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { SocialGroup } from "components/Icon/SocialGroup";
import { Loading } from "components/Loading";
import { LoadingContext } from "context/loading.context";

export default function ArchivePage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { loading } = useContext(LoadingContext);
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(files);

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

      {loading ? (
        <Loading />
      ) : (
        <div className="row g-2">
          {postCards.map((story: AllPostProps) => (
            <TextCard
              key={story.frontmatter.name}
              link={`/${story.frontmatter.path}/${story.slug}`}
              post={story}
            />
          ))}
        </div>
      )}
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
