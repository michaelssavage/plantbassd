import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useFilter } from "hooks/useFilter.hook";
import { CardWithText } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getAllPosts } from "utils/getAllPosts";

export default function ArchivePage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(files, "posts");

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Archive</title>
      </Head>
      <div className="archiveBG">
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
            <CardWithText
              columns="col-4 col-sm-4 col-md-4 col-lg-2"
              key={story.frontmatter.name}
              link={`/${story.frontmatter.path}/${story.slug}`}
              post={story}
            />
          ))}
        </div>
      </div>
    </>
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
