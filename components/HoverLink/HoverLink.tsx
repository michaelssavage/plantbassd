import styles from "./hoverlink.module.scss";

interface LinkProps {
  url: string;
  name?: string;
  inline?: boolean;
  external?: boolean;
}

export const HoverLink = ({ url, name, inline, external }: LinkProps) => {
  return (
    <a
      className={inline ? styles.inlineLink : styles.hoverLink}
      data-replace={name ? name : url}
      href={external ? `https://${url}` : url}
      rel={external ? "noopener noreferrer" : ""}
      target={external ? "_blank" : ""}
    >
      <span>{name ? name : url}</span>
    </a>
  );
};
