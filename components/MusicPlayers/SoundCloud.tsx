import dynamic from "next/dynamic";
import { HoverLink } from "components/HoverLink";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface Props {
  url: string;
  name?: string;
  height?: string;
}

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
          Stream <HoverLink url={url} name={name} inline external /> on our SoundCloud
        </div>
      )}
    </>
  );
};
