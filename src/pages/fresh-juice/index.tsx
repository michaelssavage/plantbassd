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
import { SocialButton } from "components/Icon";
import { plantbassdInstagram } from "utils/constants";
import { sortByMostRecentDate } from "utils";

export default function FreshJuicePage({
  freshjuice,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(freshjuice);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="freshjuiceBG">
      <PageMetaData
        title="Fresh Juice"
        description=" Supporting underground artists with reviews of hot new music from around the world. See more
        on our Bandcamp below."
      />
      <h1 className={styles.pageHeader}>Fresh Juice</h1>
      <h3 className={styles.pageText}>
        Supporting underground artists with reviews of hot new music from around the world. See more
        on our Bandcamp below.
      </h3>
      <SocialButton name="instagram" url={plantbassdInstagram} text="Instagram" />
      <SocialButton name="bandcamp" url="https://bandcamp.com/oisincampbellbap" text="Bandcamp" />
      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />
      <div className="row g-3">
        {postCards.map((juice: AllPostProps) => (
          <TextCard key={juice.frontmatter.name} link={`/fresh-juice/${juice.slug}`} post={juice} />
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
      freshjuice: freshjuice.sort(sortByMostRecentDate),
    },
  };
};
