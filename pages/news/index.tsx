import Link from "next/link";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next/types";
import { sortByDate } from "utils";
import Error from "components/Error";
import { FilterTags } from "components/FilterTags";
import { Card } from "components/Card";
import styles from "styles/page.module.scss";
import { AllPostProps } from "types/frontmatter";
import { useTags } from "hooks";
import { HoverLink } from "components/HoverLink";
import { getAllPosts } from "utils/getAllPosts";
import PageTitle from "components/PageTitle";
import { plantbassdInstagram } from "utils/constants";

const newsTags = [
  { name: "fresh juice", value: false },
  { name: "gigs", value: false },
  { name: "guides", value: false },
  { name: "premieres", value: false },
  { name: "reviews", value: false },
  { name: "festivals", value: false },
];

export default function NewsPage({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { error, handleTags, hasErrored, newsStories, tagList } = useTags(newsTags, files, "tags");

  if (hasErrored) return <Error error={error} />;

  return (
    <div className="newsBG">
      <PageTitle title="News" />
      <h1 className={styles.pageHeader}>Plant Bass'd News</h1>

      <p className={styles.pageText}>
        News about club guides, gigs, and all things Plant Bass'd. Keep up to date on our Instagram,{" "}
        <HoverLink url={plantbassdInstagram} name="@plantbassd___" inline external />
      </p>

      <FilterTags handleTags={handleTags} tagList={tagList} />

      <div className="row g-3">
        {newsStories.slice(0, 24).map((story: AllPostProps) => (
          <Card
            key={story.frontmatter.name}
            link={`/${story.frontmatter.path}/${story.slug}`}
            post={story}
            text
          />
        ))}
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
      files: files.sort(sortByDate).reverse(),
    },
  };
};
