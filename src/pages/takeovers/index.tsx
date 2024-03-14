import { GetStaticProps } from "next/types";

import Error from "components/Error";
import { useSearchFilter } from "hooks/useSearchFilter.hook";
import { TextCard } from "components/Card";
import styles from "styles/page.module.scss";
import { PostProps } from "types/frontmatter";
import { SearchBox } from "components/SearchBox";
import { getPosts } from "utils/getPosts";
import PageMetaData from "components/PageMetaData";
import { sortByMostRecentDate } from "utils";
import { SocialGroup } from "components/Icon";

import { Loading } from "components/Loading";

export default function TakeoverPage({ takeovers }: { takeovers: PostProps[] }) {
  const { searchError, filter, searchHasErrored, postCards, handleSearchChange } =
    useSearchFilter<PostProps>(takeovers);

  if (searchHasErrored) return <Error error={searchError} />;

  return (
    <div className="takeoverBG">
      <PageMetaData
        title="Takeovers"
        description="Artists, Friends, and Guests select and share their top tracks on Spotify."
      />
      <h1 className={styles.pageHeader}>Takeovers</h1>

      <h3 className={styles.pageText}>
        Artists, Friends, and Guests select and share their top tracks on Spotify. Check out the
        playlist below.
      </h3>

      <SearchBox
        handleSearchChange={handleSearchChange}
        filter={filter}
        amount={postCards.length}
      />

      <SocialGroup icons={["instagram", "spotify"]} />

      <Loading>
        <div className="row g-3">
          {postCards.map((takeover) => (
            <TextCard
              key={takeover.frontmatter.name}
              link={`/takeovers/${takeover.slug}`}
              post={takeover}
            />
          ))}
        </div>
      </Loading>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const takeovers = await getPosts("takeovers");

  return {
    props: {
      takeovers: takeovers.sort(sortByMostRecentDate),
    },
  };
};
