import Link from "next/link";
import styles from "./HoverLink.module.scss";

interface LinkProps {
  url: string;
  name?: string;
  external?: boolean;
}

const makeLink = (link: string) => {
  if (link.includes("https://")) {
    return link;
  }
  return `https://${link}`;
};

export const HoverLink = ({ url, name, external = false }: LinkProps) => {
  if (external) {
    return (
      <a
        className={styles.hoverLink}
        data-replace={name ? name : url}
        href={makeLink(url)}
        rel="noopener noreferrer"
        target="_blank"
      >
        {name ? name : url}
      </a>
    );
  }
  return (
    <Link className={styles.hoverLink} data-replace={name ? name : url} href={url}>
      {name ? name : url}
    </Link>
  );
};
