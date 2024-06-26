import { GetStaticProps } from "next/types";
import { useTagsFilter } from "hooks";
import Error from "components/Error";
import { FilterTags } from "components/FilterTags";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { getPosts } from "utils/getPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { SocialGroup } from "components/Icon";
import { PostProps } from "types/frontmatter";

const gigsTags = [
  { name: "edinburgh", value: false },
  { name: "glasgow", value: false },
  { name: "dublin", value: false },
  { name: "galway", value: false },
];

export default function GigsPage({ gigs }: { gigs: PostProps[] }) {
  const { tagsError, filteredPosts, tagList, handleTags } = useTagsFilter<PostProps>(
    gigsTags,
    gigs,
    "city"
  );

  if (tagsError) return <Error error={tagsError} />;

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
      <FilterTags handleTags={handleTags} tagList={tagList} />

      <SocialGroup icons={["instagram", "resident advisor"]} />

      <div className="row g-3">
        {filteredPosts.map((gig) => (
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
