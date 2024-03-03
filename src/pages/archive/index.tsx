import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getAllPosts } from "utils/getAllPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { SocialGroup } from "components/Icon";
import { Loading } from "components/Loading";

export default function ArchivePage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
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

      <Loading>
        <div className="row g-2">
          {postCards.map((story: AllPostProps) => (
            <TextCard
              key={story.frontmatter.name}
              link={`/${story.frontmatter.path}/${story.slug}`}
              post={story}
            />
          ))}
        </div>
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
