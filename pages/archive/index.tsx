import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { CardCover } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getAllPosts } from "utils/getAllPosts";
import PageTitle from "components/PageTitle";

export default function ArchivePage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(files);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="archiveBG">
      <PageTitle title="Archive" />
      <h1 className={styles.pageHeader}>Plant Bass'd Archive</h1>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />

      <div className="row g-2">
        {postCards.map((story: AllPostProps) => (
          <CardCover
            key={story.frontmatter.name}
            link={`/${story.frontmatter.path}/${story.slug}`}
            post={story.frontmatter}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllPosts();

  return {
    props: {
      files: files.sort(sortByDate).reverse(),
    },
  };
};
