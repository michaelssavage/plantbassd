import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { useTagsFilter } from "hooks";
import Error from "components/Error";
import { FilterTags } from "components/FilterTags";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { getPosts } from "utils/getPosts";
import PageMetaData from "components/PageMetaData";
import { SocialButton } from "components/Icon";
import { plantbassdInstagram } from "utils/constants";
import { sortByMostRecentDate } from "utils";

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
      <PageMetaData
        title="Gigs"
        description={`After the first successful party in Edinburgh in September 2021, Plant Bass'd has put
        together ${filteredPosts.length} shows in Ireland and Scotland`}
      />
      <h1 className={styles.pageHeader}>Gigs</h1>

      <h3 className={styles.pageText}>
        After the first successful party in Edinburgh in September 2021, Plant Bass'd has put
        together {filteredPosts.length} shows in Ireland and Scotland:
      </h3>

      <SocialButton name="instagram" url={plantbassdInstagram} text="Instagram" />
      <SocialButton
        name="resident advisor"
        url="https://ra.co/promoters/103854"
        text="Resident Advisor"
      />
      <FilterTags handleTags={handleTags} tagList={tagList} />

      <div className="row g-3">
        {filteredPosts.map((gig: AllPostProps) => (
          <TextCard
            key={gig.frontmatter.name}
            link={`/${gig.frontmatter.path}/${gig.slug}`}
            post={gig}
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
      gigs: gigs.sort(sortByMostRecentDate),
    },
  };
};
