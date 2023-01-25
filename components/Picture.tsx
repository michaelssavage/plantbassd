import Image from "next/image";

import { CSSProperties } from "react";
import { shimmer, toBase64 } from "utils";

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
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(size, size))}`}
      height={size}
      placeholder="blur"
      src={src}
      width={size}
      style={css}
    />
  );
};
