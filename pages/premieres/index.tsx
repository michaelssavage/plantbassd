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

export default function PremieresPage({
  premieres,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(premieres);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radioBG">
      <PageMetaData title="Premieres" />
      <h1 className={styles.pageHeader}>Premieres</h1>
      <h3 className={styles.pageText}>
        Listen to new track premieres from around the world on our SoundCloud.
      </h3>
      <SocialButton name="instagram" url={plantbassdInstagram} text="Instagram" />
      <SocialButton
        name="soundcloud"
        url="https://soundcloud.com/plantbassddjs/sets/plant-bassd-premieres"
        text="Soundcloud"
      />
      <SearchBox handleSearchChange={handleSearchChange} filter={filter} />
      <div className="row g-3">
        {postCards.map((premiere: AllPostProps) => (
          <TextCard
            key={premiere.frontmatter.name}
            link={`/premieres/${premiere.slug}`}
            post={premiere}
          />
        ))}
      </div>
      <div className="mt-2 text-end">{premieres.length} cards.</div>
    </div>
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
