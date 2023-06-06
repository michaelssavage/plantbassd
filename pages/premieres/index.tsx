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

export default function PremieresPage({
  premieres,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter(premieres);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="radioBG">
      <PageTitle title="Premieres" />
      <h1 className={styles.pageHeader}>Premieres</h1>

      <h3 className={styles.pageText}>
        Listen to new track premieres from around the world on our SoundCloud.
      </h3>
      <SocialButton
        name="soundcloud"
        url="https://soundcloud.com/plantbassddjs/sets/plant-bassd-premieres"
      />
      <SocialButton name="instagram" url={plantbassdInstagram} />

      <SearchBox handleSearchChange={handleSearchChange} filter={filter} />
      <div className="row g-3">
        {postCards.map((premiere: AllPostProps) => (
          <CardCover
            key={premiere.frontmatter.name}
            link={`/premieres/${premiere.slug}`}
            post={premiere.frontmatter}
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
