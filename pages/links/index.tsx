import Link from "next/link";
import { linkList, mainLinks } from "arrays/linktree";
import { socialIcons } from "arrays/social-icons";
import { Icon } from "components/Icon";
import Header from "components/Header";
import styles from "styles/links.module.scss";
import Error from "components/Error";
import { Signup } from "components/Signup/Signup";
import { useTagsFilter } from "hooks";
import { FilterTags } from "components/FilterTags";
import PageTitle from "components/PageTitle";
import { LinkPost, RenderLink } from "components/Links";

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
      <PageTitle title="Links" />
      <div className={styles.pushSides}>
        <div className={`row ${styles.pbLogo}`}>
          <Header first="Plant" second="Bass'd" />
        </div>

        <div className="row">
          {socialIcons.map(({ link, name }) => (
            <div className={`col ${styles.iconContainer}`} key={link}>
              <Link href={link}>
                <Icon icon={name} styling={styles.socialIcon} />
              </Link>
            </div>
          ))}
        </div>

        <hr />

        <FilterTags handleTags={handleTags} tagList={tagList} />

        <h2 className="d-flex justify-content-end">Most Recent</h2>

        <LinkPost posts={filteredPosts} />

        <h2 className="d-flex justify-content-end">Discovery</h2>
        {mainLinks.map(({ link, name, img, title }) => (
          <div className={`row ${styles.buttonStyle}`} key={title}>
            <div className={styles.linkTitle}>
              <Icon icon={name} styling={styles.linkIcon} />
              <div>{name.toUpperCase()}</div>
            </div>
            <RenderLink link={link} img={img}>
              {title}
            </RenderLink>
          </div>
        ))}
        <div className="row my-4">
          <Signup linktree />
        </div>
      </div>
    </div>
  );
}
