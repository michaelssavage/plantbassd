import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { useFilter } from "hooks/useFilter.hook";
import { Card } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { SocialButton } from "components/Icon";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";

export default function RadioPage({ radios }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, filter, hasErrored, postCards, handleSearchChange } = useFilter(radios);

  if (hasErrored) return <Error error={error} />;

  return (
    <div className="radioBG">
      <PageTitle title="Mixes" />
      <h1 className={styles.pageHeader}>Plant Bass'd Mixes</h1>

      <p className={styles.pageText}>
        Guest mixes from homegrown and international artists. Check them out on our SoundCloud.
      </p>
      <div className="row align-items-center">
        <SearchBox
          handleSearchChange={handleSearchChange}
          filter={filter}
          style={`col-md-4 me-auto input-group ${styles.radioFilter}`}
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
          <Card key={radio.frontmatter.name} link={`/radios/${radio.slug}`} post={radio} />
        ))}
      </div>
      <div className="mt-2 text-end">{postCards.length} cards.</div>
    </div>
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
