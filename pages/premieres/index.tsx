import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useFilter } from "hooks/useFilter.hook";
import { CardNoText } from "components/Card";
import styles from "styles/page.module.scss";
import { SocialButton } from "components/Icon";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";

export default function PremieresPage({
  premieres,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(
    premieres,
    "posts"
  );

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Premieres</title>
      </Head>

      <div className="radioBG">
        <h1 className={styles.pageHeader}>Premieres</h1>

        <p className={styles.pageText}>
          Listen to new track premieres from around the world on our SoundCloud.
        </p>
        <div className="row align-items-center">
          <SearchBox
            handleSearchChange={handleSearchChange}
            filter={filter}
            style={`col-md-4 me-auto input-group ${styles.radioFilter}`}
          />

          <SocialButton
            name="Premieres"
            url="https://soundcloud.com/plantbassddjs/sets/plant-bassd-premieres"
            style={`${styles.soundcloud} text-nowrap btn btn-dark`}
          />
        </div>
        <div className="row g-3">
          {postCards.map((premiere: AllPostProps) => (
            <CardNoText
              key={premiere.frontmatter.name}
              link={`/premieres/${premiere.slug}`}
              post={premiere}
            />
          ))}
        </div>

        <div className="mt-2 text-end">{premieres.length} cards.</div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const premieres = await getPosts("premieres");

  return {
    props: {
      premieres: premieres.sort(sortByDate).reverse(),
    },
  };
};
