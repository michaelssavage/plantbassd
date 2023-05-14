import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { useTagsFilter } from "hooks";
import { sortByDate } from "utils";
import Error from "components/Error";
import { FilterTags } from "components/FilterTags";

import { Card } from "components/Card";
import styles from "styles/page.module.scss";

import { AllPostProps } from "types/frontmatter";
import { getPosts } from "utils/getPosts";
import PageTitle from "components/PageTitle";

const gigsTags = [
  { name: "edinburgh", value: false },
  { name: "glasgow", value: false },
  { name: "dublin", value: false },
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
      <h1 className={styles.pageHeader}>Plant Bass'd Gigs</h1>

      <p className={styles.pageText}>
        Check out some of the {filteredPosts.length} shows we've put together in Ireland and the UK:
      </p>

      <FilterTags handleTags={handleTags} tagList={tagList} />

      <div className="row g-3">
        {filteredPosts.map((gig: AllPostProps) => (
          <Card
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
      gigs: gigs.sort(sortByDate).reverse(),
    },
  };
};
