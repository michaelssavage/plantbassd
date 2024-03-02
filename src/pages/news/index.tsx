import Link from "next/link";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import Error from "components/Error";
import { FilterTags } from "components/FilterTags";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { useTagsFilter } from "hooks";
import { getAllPosts } from "utils/getAllPosts";
import PageMetaData from "components/PageMetaData";
import { plantbassdInstagram } from "utils/constants";
import { SocialButton } from "components/Icon";
import { sortByMostRecentDate } from "utils";

const newsTags = [
  { name: "fresh juice", value: false },
  { name: "gigs", value: false },
  { name: "guides", value: false },
  { name: "premieres", value: false },
  { name: "reviews", value: false },
  { name: "festivals", value: false },
];

export default function NewsPage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { tagsError, tagsHasErrored, filteredPosts, tagList, handleTags } = useTagsFilter(
    newsTags,
    files,
    "tags"
  );

  if (tagsHasErrored) return <Error error={tagsError} />;

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
      <SocialButton name="instagram" url={plantbassdInstagram} text="Instagram" />
      <SocialButton name="email" url="mailto: plantbassdworld@gmail.com" text="Email" />

      <FilterTags handleTags={handleTags} tagList={tagList} />

      <div className="row g-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((story: AllPostProps) => (
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

      <div className={styles.viewAllBtn}>
        <Link href="/archive" className="btn btn-dark btn-lg px-5 py-2" type="button">
          View All Posts
        </Link>
      </div>
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
