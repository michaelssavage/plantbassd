import { GetStaticProps } from "next/types";

import { useTagsFilter } from "hooks";
import Error from "components/Error";
import { FilterTags } from "components/FilterTags";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { PostProps } from "types/frontmatter";
import { getPosts } from "utils/getPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { SocialGroup } from "components/Icon";

import { Loading } from "components/Loading";

const gigsTags = [
  { name: "edinburgh", value: false },
  { name: "glasgow", value: false },
  { name: "dublin", value: false },
  { name: "galway", value: false },
];

export default function GalleryPage({ gigs }: { gigs: PostProps[] }) {
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
        description="Check out some pics from shows we've put together in Ireland and the UK"
      />
      <h1 className={styles.pageHeader}>Gallery</h1>

      <h3 className={styles.pageText}>
        Check out some pics from shows we've put together in Ireland and the UK:
      </h3>

      <FilterTags handleTags={handleTags} tagList={tagList} />

      <SocialGroup icons={["instagram", "resident advisor"]} />

      <Loading>
        <div className="row g-3">
          {filteredPosts.map((gig) => (
            <TextCard
              key={gig.frontmatter.name}
              link={`/${gig.frontmatter.path}/${gig.slug}`}
              post={gig}
            />
          ))}
        </div>
      </Loading>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const gigs = await getPosts("gallery");

  return {
    props: {
      gigs: gigs.sort(sortByMostRecentDate),
    },
  };
};
