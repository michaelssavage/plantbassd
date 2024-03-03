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
import { SocialGroup } from "components/Icon/SocialGroup";

export default function GuidesPage({ guides }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(guides);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radioBG">
      <PageMetaData title="Guides" description="Read our guide to where to dance this weekend" />
      <h1 className={styles.pageHeader}>Premieres</h1>
      <h3 className={styles.pageText}>Read our guide to where to dance this weekend</h3>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />
      <SocialGroup icons={["instagram", "soundcloud"]} />

      <div className="row g-3">
        {postCards.map((guide: AllPostProps) => (
          <TextCard key={guide.frontmatter.name} link={`/guides/${guide.slug}`} post={guide} />
        ))}
      </div>
      <div className="mt-2 text-end">{guides.length} cards.</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const guides = await getPosts("guides");

  return {
    props: {
      guides: guides.sort(sortByMostRecentDate),
    },
  };
};
