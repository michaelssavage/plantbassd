interface Props {
  src: string;
}

/**
 *
 * @param src = embedded player src
 */
export const BandCamp = ({ src }: Props) => {
  return (
    <div className="mt-3 mb-2">
      <iframe
        style={{ border: 0, width: "100%", height: "120px" }}
        src={`https://bandcamp.com/EmbeddedPlayer/${src}/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/`}
        allow="autoplay"
      />
    </div>
  );
};
