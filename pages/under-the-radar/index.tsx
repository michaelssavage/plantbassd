import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { CardCover } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";
import { SocialButton } from "components/Icon";

export default function UnderTheRadarPage({
  radars,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(radars);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radarBG">
      <PageTitle title="Under The Radar" />
      <h1 className={styles.pageHeader}>Under The Radar</h1>

      <h3 className={styles.pageText}>
        End of month roundups of the releases that might have flew under your radar.
        <SocialButton name="bandcamp" url="https://bandcamp.com/oisincampbellbap" />
      </h3>

      <SearchBox handleSearchChange={handleSearchChange} filter={filter} />

      <div className="row g-3">
        {postCards.map((radar: AllPostProps) => (
          <CardCover
            key={radar.frontmatter.name}
            link={`/under-the-radar/${radar.slug}`}
            post={radar.frontmatter}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const radars = await getPosts("under-the-radar");

  return {
    props: {
      radars: radars.sort(sortByDate).reverse(),
    },
  };
};
