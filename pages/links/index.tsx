import Link from "next/link";
import { ReactNode } from "react";
import { linkList, mainLinks } from "arrays/linktree";
import { socialIcons } from "arrays/social-icons";
import { Icon } from "components/Icon";
import Header from "components/Header";
import styles from "styles/links.module.scss";
import Error from "components/Error";
import { Signup } from "components/Newsletter/Signup";
import { Picture } from "components/Picture";
import { HoverLink } from "components/HoverLink";
import { useTagsFilter } from "hooks";
import { FilterTags } from "components/FilterTags";
import PageTitle from "components/PageTitle";

interface RenderLinkProps {
  link: string;
  img: string;
  children: ReactNode;
}

const linkTags = [
  { name: "tickets", value: false },
  { name: "fresh juice", value: false },
  { name: "premieres", value: false },
  { name: "news", value: false },
];

const RenderLink = ({ link, img, children }: RenderLinkProps) => {
  const classname = `btn btn-outline-dark ${styles.btnText} ${img && styles.btnIfImage}`;

  if (link.includes("www.plantbassd.com")) {
    return (
      <Link href={new URL(link).pathname} className={classname} role="button">
        {children}
      </Link>
    );
  }
  return (
    <a href={link} className={classname} rel="noopener noreferrer" role="button" target="_blank">
      {children}
    </a>
  );
};

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

        {filteredPosts.map(({ link, name, img, description, title }) => (
          <div className={`row ${styles.buttonStyle}`} key={title}>
            <div className={styles.linkTitle}>
              <Icon icon={name} styling={styles.linkIcon} />
              <HoverLink
                url={name === "tickets" ? "/gigs" : `/${name}`}
                name={name.toUpperCase()}
              />
            </div>
            <RenderLink link={link} img={img}>
              <div className={img && styles.imageAndText}>
                {img && (
                  <Picture
                    src={img}
                    alt={`pic of ${title}`}
                    size={150}
                    style={{ borderRadius: "0.275rem" }}
                  />
                )}
                <div>
                  <div className={description && "fw-bold"}>{title}</div>
                  {description && <div>{description}</div>}
                </div>
              </div>
            </RenderLink>
          </div>
        ))}

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
