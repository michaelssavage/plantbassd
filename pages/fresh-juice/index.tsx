import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { CardCover } from "components/Card";
import styles from "styles/page.module.scss";
import { SocialButton } from "components/Icon";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";

export default function FreshJuicePage({
  freshjuice,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(freshjuice);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="freshjuiceBG">
      <PageTitle title="Fresh Juice" />
      <h1 className={styles.pageHeader}>Fresh Juice</h1>
      <p className={styles.pageText}>
        Read our reviews of new music releases from around the world that we couldn't get enough of.
      </p>
      <div className="row align-items-center">
        <SearchBox
          handleSearchChange={handleSearchChange}
          filter={filter}
          style={`col-md-4 me-auto input-group ${styles.radioFilter}`}
        />
        <SocialButton
          name="Bandcamp"
          url="https://bandcamp.com/oisincampbellbap"
          style={`btn btn-dark ${styles.bandcamp} `}
        />
      </div>
      <div className="row g-3">
        {postCards.map((juice: AllPostProps) => (
          <CardCover
            key={juice.frontmatter.name}
            link={`/fresh-juice/${juice.slug}`}
            post={juice.frontmatter}
          />
        ))}
      </div>
      <div className="mt-2 text-end">{postCards.length} cards.</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const freshjuice = await getPosts("fresh-juice");

  return {
    props: {
      freshjuice: freshjuice.sort(sortByDate).reverse(),
    },
  };
};
