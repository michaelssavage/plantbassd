import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import PropTypes from "prop-types";

export const Picture = ({ alt, height, src, width }) => {
  const css = { maxWidth: "100%", height: "auto", objectFit: "contain" };
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

Picture.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};
