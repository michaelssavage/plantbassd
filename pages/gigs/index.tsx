import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { useTagsFilter } from "hooks";
import { sortByDate } from "utils";
import Error from "components/Error";
import { FilterTags } from "components/FilterTags";

import { CardCover } from "components/Card";
import styles from "styles/page.module.scss";

import { AllPostProps } from "types/frontmatter";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";
import { SocialButton } from "components/Icon";
import { plantbassdInstagram } from "utils/constants";

const gigsTags = [
  { name: "edinburgh", value: false },
  { name: "glasgow", value: false },
  { name: "dublin", value: false },
  { name: "galway", value: false },
];

export default function GigsPage({ gigs }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { tagsError, tagsHasErrored, filteredPosts, tagList, handleTags } = useTagsFilter(
    gigsTags,
    gigs,
    "city"
  );

  if (tagsHasErrored) return <Error error={tagsError} />;

  return (
    <div className="gigsBG">
      <PageTitle title="Gigs" />
      <h1 className={styles.pageHeader}>Gigs</h1>

      <h3 className={styles.pageText}>
        Check out some of the {filteredPosts.length} shows we've put together in Ireland and the UK:
      </h3>

      <SocialButton
        name="resident advisor"
        url="https://ra.co/promoters/103854"
        text="Resident Advisor"
      />
      <SocialButton name="instagram" url={plantbassdInstagram} text="Instagram" />
      <FilterTags handleTags={handleTags} tagList={tagList} />

      <div className="row g-3">
        {filteredPosts.map((gig: AllPostProps) => (
          <CardCover
            key={gig.frontmatter.name}
            link={`/${gig.frontmatter.path}/${gig.slug}`}
            post={gig.frontmatter}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const gigs = await getPosts("gigs");

  return {
    props: {
      gigs: gigs.sort(sortByDate).reverse(),
    },
  };
};
