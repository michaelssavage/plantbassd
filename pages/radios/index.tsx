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
import { plantbassdInstagram } from "utils/constants";

export default function RadioPage({ radios }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(radios);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radioBG">
      <PageTitle title="Mixes" />
      <h1 className={styles.pageHeader}>Plant Bass'd Mixes</h1>

      <h3 className={styles.pageText}>
        Guest mixes from homegrown and international artists. Click the link below to find out more.
      </h3>
      <SocialButton
        name="soundcloud"
        url="https://soundcloud.com/plantbassddjs/sets/plant-bassd-radio"
      />
      <SocialButton name="instagram" url={plantbassdInstagram} />

      <SearchBox handleSearchChange={handleSearchChange} filter={filter} />
      <div className="row g-3">
        {postCards.map((radio: AllPostProps) => (
          <CardCover
            key={radio.frontmatter.name}
            link={`/radios/${radio.slug}`}
            post={radio.frontmatter}
          />
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
