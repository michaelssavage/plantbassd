import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageMetaData from "components/PageMetaData";
import { SocialButton } from "components/Icon";
import { plantbassdInstagram } from "utils/constants";

export default function GuidesPage({ guides }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(guides);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radioBG">
      <PageMetaData title="Guides" description="Read our guide to where to dance this weekend" />
      <h1 className={styles.pageHeader}>Premieres</h1>
      <h3 className={styles.pageText}>Read our guide to where to dance this weekend</h3>
      <SocialButton name="instagram" url={plantbassdInstagram} text="Instagram" />
      <SocialButton
        name="soundcloud"
        url="https://soundcloud.com/plantbassdworld/sets/plant-bassd-premieres"
        text="Soundcloud"
      />
      <SearchBox handleSearchChange={handleSearchChange} filter={filter} />
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
      guides: guides.sort(sortByDate).reverse(),
    },
  };
};
