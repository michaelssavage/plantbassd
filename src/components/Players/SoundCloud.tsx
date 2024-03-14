import dynamic from "next/dynamic";
import { HoverLink } from "components/HoverLink";

interface Props {
  url: string;
  name?: string;
  height?: string;
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

/**
 *
 * @param url = soundcloud url
 * @param name = name of track
 * @param height = height in px of the player
 */
export const SoundCloud = ({ url, name, height = "500px" }: Props) => {
  return (
    <>
      <ReactPlayer url={url} width="100%" height={height} controls />
      {name && (
        <div>
          Stream <HoverLink url={url} name={name} external /> on our SoundCloud
        </div>
      )}
    </>
  );
};
