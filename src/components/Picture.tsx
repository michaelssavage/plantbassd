import { CldImage } from "next-cloudinary";

import { CSSProperties } from "react";
import { blurImgUrl } from "utils";

interface PictureProps {
  alt: string;
  size: number;
  src: string;
  style?: CSSProperties;
  withSubtitle?: boolean;
}

export const Picture = ({ alt, size, src, style, withSubtitle }: PictureProps) => {
  const css: CSSProperties = { maxWidth: "100%", height: "auto", objectFit: "contain" };
  const myStyle = { ...css, ...style };
  return (
    <CldImage
      alt={alt}
      blurDataURL={blurImgUrl(size)}
      className={withSubtitle ? "mb-0" : ""}
      height={size}
      placeholder="blur"
      src={src}
      width={size}
      style={myStyle}
    />
  );
};
