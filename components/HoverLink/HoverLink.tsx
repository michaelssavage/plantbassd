import { CSSProperties } from "react";

interface LinkProps {
  url: string;
  name?: string;
  inline?: boolean;
  external?: boolean;
  inlineCSS?: CSSProperties;
}

export const HoverLink = ({
  url,
  name,
  inline,
  external,
  inlineCSS = { marginBottom: "-0.4rem" },
}: LinkProps) => {
  return (
    <a
      className="hoverLink"
      style={inline ? inlineCSS : undefined}
      data-replace={name ? name : url}
      href={external ? `https://${url}` : url}
      rel={external ? "noopener noreferrer" : ""}
      target={external ? "_blank" : ""}
    >
      <span>{name ? name : url}</span>
    </a>
  );
};
