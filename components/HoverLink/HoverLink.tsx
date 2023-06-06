import { CSSProperties } from "react";
import styles from "./HoverLink.module.scss";

interface LinkProps {
  url: string;
  name?: string;
  inline?: boolean;
  external?: boolean;
  inlineCSS?: CSSProperties;
}

const makeLink = (link: string) => {
  if (link.includes("https://")) {
    return link;
  }
  return `https://${link}`;
};

export const HoverLink = ({
  url,
  name,
  inline,
  external,
  inlineCSS = { marginBottom: "-0.4rem" },
}: LinkProps) => {
  return (
    <a
      className={styles.hoverLink}
      style={inline ? inlineCSS : undefined}
      data-replace={name ? name : url}
      href={external ? makeLink(url) : url}
      rel={external ? "noopener noreferrer" : ""}
      target={external ? "_blank" : ""}
    >
      <span>{name ? name : url}</span>
    </a>
  );
};
