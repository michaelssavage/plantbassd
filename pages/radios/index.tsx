import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";

import { useFilter } from "hooks/useFilter.hook";
import { CardNoText } from "components/Card";
import styles from "styles/page.module.scss";
import GoBack from "components/GoBack";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { SocialButton } from "components/Icon";
import { getPosts } from "utils/getPosts";

export default function RadioPage({ radios }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(radios, "posts");

  if (hasErrored) return <Error error={error} />;

  return (
    <>
      <Head>
        <title>Mixes</title>
      </Head>

      <div className="radioBG">
        <h1 className={styles.pageHeader}>Plant Bass'd Mixes</h1>

        <p className={styles.pageText}>
          Guest mixes from homegrown and international artists. Check them out on our SoundCloud.
        </p>
        <div className="row align-items-center">
          <SearchBox
            handleSearchChange={handleSearchChange}
            filter={filter}
            style={`col-md-4 me-auto input-group ${styles.radioFilter}`}
            text="artists by name"
          />

          <SocialButton
            name="Plant Bass'd Radio"
            icon="radio"
            url="https://soundcloud.com/plantbassddjs/sets/plant-bassd-radio"
            style={`${styles.soundcloud} text-nowrap btn btn-dark`}
          />
        </div>
        <div className="row g-3">
          {postCards.map((radio: AllPostProps) => (
            <CardNoText key={radio.frontmatter.name} link={`/radios/${radio.slug}`} post={radio} />
          ))}
        </div>

        <GoBack />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const radios = await getPosts("radios");

  return {
    props: {
      radios: radios.sort(sortByDate).reverse(),
    },
  };
};
