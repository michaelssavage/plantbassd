import Link from "next/link";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import { LinkProps } from "arrays/linktree";
import { EmptyIcon } from "components/Icon";
import { Icon } from "components/Icon/Icon";
import { Button } from "components/Button";
import styles from "./Links.module.scss";

const alterLink = (name: string) => {
  if (name === "tickets") return "/gigs";
  if (name === "premiere") return "/premieres";

  return `/${name.replaceAll(" ", "-")}`;
};

export const LinkPost = ({ posts }: { posts: LinkProps[] }) => {
  if (posts.length === 0) {
    return (
      <div className={styles.noData}>
        <EmptyIcon />
        No Data For Selected Filters
      </div>
    );
  }

  return posts.map(({ description, img, link, name, title }) => (
    <div className={`row ${styles.buttonStyle}`} key={title}>
      <div className={styles.linkTitle}>
        <HoverLink url={alterLink(name)} name={name.toUpperCase()} />
        <Icon name={name} />
      </div>
      <div className={`row ${styles.imageAndText}`}>
        <span className={`col-12 ${name === "tickets" ? "col-sm-7" : "col-sm-9"}`}>
          <h2>{title}</h2>

          {description && (
            <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br>") }} />
          )}
          <Button to={link} text="Open" wide />
        </span>
        <div className={`col-6 ${name === "tickets" ? "col-sm-5" : "col-sm-3"}`}>
          {img && (
            <Link href={link}>
              <Picture src={img} alt={`pic of ${title}`} size={600} />
            </Link>
          )}
        </div>
      </div>
    </div>
  ));
};
