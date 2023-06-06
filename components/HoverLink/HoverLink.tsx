import { CSSProperties } from "react";
import styles from "./HoverLink.module.scss";

interface LinkProps {
  url: string;
  name?: string;
  inline?: boolean;
  external?: boolean;
  inlineCSS?: CSSProperties;
  blue?: boolean;
}

export const HoverLink = ({
  url,
  name,
  inline,
  external,
  inlineCSS = { marginBottom: "-0.4rem" },
  blue,
}: LinkProps) => {
  const makeLink = (url: string) => {
    if (external) {
      if (!url.includes("http://")) {
        return `https://${url}`;
      }
    }
    return url;
  };

  return (
    <a
      className={blue ? styles.blueLink : styles.hoverLink}
      style={inline ? inlineCSS : undefined}
      data-replace={name ? name : url}
      href={makeLink(url)}
      rel={external ? "noopener noreferrer" : ""}
      target={external ? "_blank" : ""}
    >
      <span>{name ? name : url}</span>
    </a>
  );
};
