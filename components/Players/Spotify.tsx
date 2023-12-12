interface Props {
  src: string;
  top?: boolean;
}

/**
 *
 * @param src = embedded player src
 */
export const Spotify = ({ src, top }: Props) => {
  return (
    <div className={top ? "mb-2" : "mt-3 mb-2"}>
      <iframe
        style={{ borderRadius: "12px" }}
        src={src}
        width="100%"
        height="152px"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};
