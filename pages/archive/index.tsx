import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getAllPosts } from "utils/getAllPosts";
import PageTitle from "components/PageTitle";
import { SocialButton } from "components/Icon";
import { plantbassdInstagram } from "utils/constants";

export default function ArchivePage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(files);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="archiveBG">
      <PageTitle title="Archive" />
      <h1 className={styles.pageHeader}>Archive</h1>
      <SocialButton name="instagram" url={plantbassdInstagram} text="Instagram" />
      <SocialButton name="email" url="mailto: plantbassddjs@gmail.com" text="Email" />

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />

      <div className="row g-2">
        {postCards.map((story: AllPostProps) => (
          <TextCard
            key={story.frontmatter.name}
            link={`/${story.frontmatter.path}/${story.slug}`}
            post={story}
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
