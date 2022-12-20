import Image from "next/image";

import { CSSProperties } from "react";
import { shimmer, toBase64 } from "components/BlurImg";

interface PictureProps {
  alt: string;
  height: number;
  src: string;
  width: number;
}

export const Picture = ({ alt, height, src, width }: PictureProps) => {
  const css: CSSProperties = { maxWidth: "100%", height: "auto", objectFit: "contain" };
  return (
    <Image
      alt={alt}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
      height={height}
      placeholder="blur"
      src={src}
      width={width}
      style={css}
    />
  );
};
