interface Props {
  src: string;
  top?: boolean;
}

/**
 *
 * @param src = embedded player src
 */
export const Juno = ({ src, top }: Props) => {
  return (
    <div className={top ? "mb-2" : "mt-3 mb-2"}>
      <iframe
        height="255"
        src={`https://www.junodownload.com/player-embed/${src}.m3u`}
        width="100%"
      ></iframe>
    </div>
  );
};
