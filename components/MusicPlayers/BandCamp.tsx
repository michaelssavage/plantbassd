interface Props {
  src: string;
}

/**
 *
 * @param src = embedded player src
 */
export const BandCamp = ({ src }: Props) => {
  return <iframe style={{ border: 0, width: "100%" }} src={src} allow="autoplay" />;
};
