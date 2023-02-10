import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";

import { useFilter } from "hooks/useFilter.hook";
import { CardNoText } from "components/Card";
import styles from "styles/page.module.scss";
import { SocialButton } from "components/Icon";
import GoBack from "components/GoBack";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";

export default function FreshJuicePage({
  freshjuice,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(
    freshjuice,
    "posts"
  );

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Fresh Juice</title>
      </Head>
      <div className="freshjuiceBG">
        <h1 className={styles.pageHeader}>Fresh Juice</h1>

        <p className={styles.pageText}>
          Read our reviews of new music releases from around the world that we couldn't get enough
          of. ({postCards.length} releases).
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
            <CardNoText
              key={juice.frontmatter.name}
              link={`/fresh-juice/${juice.slug}`}
              post={juice}
            />
          ))}
        </div>

        <GoBack />
      </div>
    </>
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
