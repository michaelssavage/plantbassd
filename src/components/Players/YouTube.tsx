import dynamic from "next/dynamic";

interface Props {
  url: string;
  height?: string;
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

/**
 *
 * @param url = soundcloud url
 * @param height = height in px of the player
 */
export const YouTube = ({ url, height = "500px" }: Props) => {
  return (
    <ReactPlayer
      url={url}
      width="100%"
      height={height}
      playing
      controls
      autoplay="on-scroll"
      loop
      muted
    />
  );
};
