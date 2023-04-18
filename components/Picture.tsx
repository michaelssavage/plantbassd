import Image from "next/image";

import { CSSProperties } from "react";
import { blurImgUrl } from "utils";

interface PictureProps {
  alt: string;
  size: number;
  src: string;
  style?: CSSProperties;
}

export const Picture = ({ alt, size, src, style }: PictureProps) => {
  const css: CSSProperties = { maxWidth: "100%", height: "auto", objectFit: "contain" };
  const myStyle = { ...css, ...style };
  return (
    <Image
      alt={alt}
      blurDataURL={blurImgUrl(size)}
      height={size}
      placeholder="blur"
      src={src}
      width={size}
      style={myStyle}
    />
  );
};
