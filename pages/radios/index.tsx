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

export default function RadioPage({ radios }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(radios);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radioBG">
      <PageMetaData
        title="Mixes"
        description="Guest mixes from homegrown and international artists."
      />
      <h1 className={styles.pageHeader}>Mixes</h1>

      <h3 className={styles.pageText}>
        Guest mixes from homegrown and international artists. Click the link below to find out more.
      </h3>
      <SocialButton name="instagram" url={plantbassdInstagram} />
      <SocialButton
        name="soundcloud"
        url="https://soundcloud.com/plantbassddjs/sets/plant-bassd-radio"
      />

      <SearchBox handleSearchChange={handleSearchChange} filter={filter} />
      <div className="row g-3">
        {postCards.map((radio: AllPostProps) => (
          <TextCard key={radio.frontmatter.name} link={`/radios/${radio.slug}`} post={radio} />
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
