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

export default function TopTenPage({ topTens }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(topTens);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="topTenBG">
      <PageMetaData
        title="Top Ten Picks"
        description="Ireland & The UK's best talent choose their favourite top ten picks of the year."
      />
      <h1 className={styles.pageHeader}>Top Ten Picks</h1>

      <h3 className={styles.pageText}>
        Ireland & The UK's best talent choose their favourite top ten picks of the year.
      </h3>
      <SocialButton name="instagram" url={plantbassdInstagram} />
      <SocialButton name="email" url="mailto: plantbassdworld@gmail.com" text="Email" />

      <SearchBox handleSearchChange={handleSearchChange} filter={filter} />

      <div className="row g-3">
        {postCards.map((topTen: AllPostProps) => (
          <TextCard
            key={topTen.frontmatter.name}
            link={`/top-ten-releases/${topTen.slug}`}
            post={topTen}
          />
        ))}
      </div>
      <div className="mt-2 text-end">{postCards.length} cards.</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const topTens = await getPosts("top-ten-releases");

  return {
    props: {
      topTens: topTens.sort(sortByDate).reverse(),
    },
  };
};
