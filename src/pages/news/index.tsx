import { GetStaticProps } from "next/types";

import Error from "components/Error";
import { FilterTags } from "components/FilterTags";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { useTagsFilter } from "hooks";
import { getAllPosts } from "utils/getAllPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { Loading } from "components/Loading";

import { SocialGroup } from "components/Icon";
import { PostProps } from "types/frontmatter";
import { Showbox } from "components/Button";
import { useBatch } from "hooks/useBatch.hook";

const newsTags = [
  { name: "fresh juice", value: false },
  { name: "gigs", value: false },
  { name: "guides", value: false },
  { name: "premieres", value: false },
  { name: "reviews", value: false },
  { name: "festivals", value: false },
];

export default function NewsPage({ files }: { files: PostProps[] }) {
  const { filesToShow, handleLoadMore, handleLoadAll } = useBatch(files);

  const { tagsError, filteredPosts, tagList, handleTags } = useTagsFilter<PostProps>(
    newsTags,
    filesToShow,
    "tags"
  );

  if (tagsError) return <Error error={tagsError} />;

  return (
    <div className="newsBG">
      <PageMetaData
        title="News"
        description="Catch the latest about new music, upcoming gigs & events, and all things Plant Bass'd."
      />
      <h1 className={styles.pageHeader}>Latest News</h1>

      <h3 className={styles.pageText}>
        Catch the latest about new music, upcoming gigs & events, and all things Plant Bass'd.
      </h3>

      <FilterTags handleTags={handleTags} tagList={tagList} />

      <SocialGroup icons={["instagram", "email"]} />

      <Loading>
        <div className="row g-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((story) => (
              <TextCard
                key={story.frontmatter.name}
                link={`/${story.frontmatter.path}/${story.slug}`}
                post={story}
              />
            ))
          ) : (
            <div className={styles.noPostsFound}>
              <p>No recent posts found</p>
            </div>
          )}
        </div>
      </Loading>

      <Showbox handleLoadMore={handleLoadMore} handleLoadAll={handleLoadAll} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllPosts();

  return {
    props: {
      files: files.sort(sortByMostRecentDate).slice(0, 12),
    },
  };
};
