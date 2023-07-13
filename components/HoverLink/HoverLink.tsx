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

export const HoverLink = ({ url, name, external }: LinkProps) => {
  return (
    <a
      className={styles.hoverLink}
      data-replace={name ? name : url}
      href={external ? makeLink(url) : url}
      rel={external ? "noopener noreferrer" : ""}
      target={external ? "_blank" : ""}
    >
      {name ? name : url}
    </a>
  );
};
