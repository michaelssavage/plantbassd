import Link from "next/link";

import { linkList } from "arrays/linktree";
import { socialIcons } from "arrays/social-icons";
import Header from "components/Header";
import styles from "styles/links.module.scss";
import Error from "components/Error";
import { Signup } from "components/Signup/Signup";
import { useTagsFilter } from "hooks";
import { FilterTags } from "components/FilterTags";
import PageMetaData from "components/PageMetaData";
import { LinkPost } from "components/Links";
import { Icon } from "components/Icon/Icon";
import { Loading } from "components/Loading";

const linkTags = [
  { name: "tickets", value: false },
  { name: "fresh juice", value: false },
  { name: "premieres", value: false },
  { name: "news", value: false },
];

export default function Links() {
  const { tagsError, tagsHasErrored, filteredPosts, tagList, handleTags } = useTagsFilter(
    linkTags,
    linkList
  );

  if (tagsHasErrored) return <Error error={tagsError} />;

  return (
    <div className={styles.linkPage}>
      <PageMetaData title="Links" />
      <div className={styles.pushSides}>
        <div className={`row ${styles.pbLogo}`}>
          <Header first="Plant" second="Bass'd" />
        </div>

        <div className="row">
          {socialIcons.map(({ link, name }) => (
            <Link key={link} href={link} className={`col ${styles.iconContainer}`}>
              <Icon name={name} />
            </Link>
          ))}
        </div>

        <hr />

        <FilterTags handleTags={handleTags} tagList={tagList} />

        <h2 className="d-flex justify-content-end p-0 m-0">Most Recent</h2>

        <Loading>
          <LinkPost posts={filteredPosts} />

          <div className="row my-4">
            <Signup linktree />
          </div>
        </Loading>
      </div>
    </div>
  );
}
