import { HoverLink } from "components/HoverLink";
import { Icon } from "components/Icon";
import { Picture } from "components/Picture";
import styles from "styles/links.module.scss";
import { LinkProps } from "arrays/linktree";
import { RenderLink } from "./RenderLink";

export const LinkPost = ({ posts }: { posts: LinkProps[] }) => {
  if (posts.length === 0) {
    return (
      <div className={`row ${styles.buttonStyle}`}>
        <div className={styles.linkTitle}>No Data</div>
        <div className={`btn btn-outline-dark disabled ${styles.btnText}`}>
          <div className={styles.imageAndText}>
            <Icon icon="empty" styling={styles.noDataIcon} />
            No Data For Selected Filters
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {posts.map(({ description, img, link, name, title }) => (
        <div className={`row ${styles.buttonStyle}`} key={title}>
          <div className={styles.linkTitle}>
            <Icon icon={name} styling={styles.linkIcon} />
            <HoverLink url={name === "tickets" ? "/gigs" : `/${name}`} name={name.toUpperCase()} />
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
    </>
  );
};