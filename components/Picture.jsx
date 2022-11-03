import { shimmer, toBase64 } from "components/BlurImg";
import Image from "next/image";
import PropTypes from "prop-types";

export const Picture = ({ alt, height, src, width }) => {
  return (
    <Image
      alt={alt}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
      height={height}
      placeholder="blur"
      src={src}
      width={width}
    />
  );
};

Picture.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
