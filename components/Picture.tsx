import Image from "next/image";

import { CSSProperties } from "react";
import { blurImgUrl } from "utils";

interface PictureProps {
  alt: string;
  size: number;
  src: string;
}

export const Picture = ({ alt, size, src }: PictureProps) => {
  const css: CSSProperties = { maxWidth: "100%", height: "auto", objectFit: "contain" };
  return (
    <Image
      alt={alt}
      blurDataURL={blurImgUrl(size)}
      height={size}
      placeholder="blur"
      src={src}
      width={size}
      style={css}
    />
  );
};
