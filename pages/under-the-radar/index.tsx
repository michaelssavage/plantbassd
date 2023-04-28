import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useFilter } from "hooks/useFilter.hook";
import { Card } from "components/Card";
import styles from "styles/page.module.scss";
import { SocialButton } from "components/Icon";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";

export default function UnderTheRadarPage({
  radars,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(radars);

  if (hasErrored) return <Error error={error} />;

  return (
    <div className="radarBG">
      <PageTitle title="Under The Radar" />
      <h1 className={styles.pageHeader}>Under The Radar</h1>

      <p className={styles.pageText}>
        End of month roundups of the releases that might have flew under your radar.
      </p>
      <div className="row align-items-center">
        <SearchBox
          handleSearchChange={handleSearchChange}
          filter={filter}
          style={`col-md-4 me-auto input-group ${styles.radioFilter}`}
        />

        <SocialButton
          name="Bandcamp collection"
          icon="bandcamp"
          url="https://bandcamp.com/oisincampbellbap"
          style={`${styles.bandcamp} text-nowrap btn btn-dark`}
        />
      </div>
      <div className="row g-3">
        {postCards.map((radar: AllPostProps) => (
          <Card key={radar.frontmatter.name} link={`/under-the-radar/${radar.slug}`} post={radar} />
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
