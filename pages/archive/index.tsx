import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useFilter } from "hooks/useFilter.hook";
import { Card } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getAllPosts } from "utils/getAllPosts";
import PageTitle from "components/PageTitle";

export default function ArchivePage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(files);

  if (hasErrored) return <Error error={error} />;

  return (
    <div className="archiveBG">
      <PageTitle title="Archive" />
      <h1 className={styles.pageHeader}>Plant Bass'd Archive</h1>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
        placeholder="search query"
        style={`input-group ${styles.archiveFilter}`}
      />

      <div className="row g-3">
        {postCards.map((story: AllPostProps) => (
          <Card
            key={story.frontmatter.name}
            link={`/${story.frontmatter.path}/${story.slug}`}
            post={story}
            columns="col-4 col-sm-4 col-md-4 col-lg-2"
            text
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
