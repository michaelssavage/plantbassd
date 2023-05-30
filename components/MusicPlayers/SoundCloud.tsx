import dynamic from "next/dynamic";
import { HoverLink } from "components/HoverLink";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface Props {
  src: string;
  url: string;
  name: string;
}

/**
 *
 * @param url = soundcloud url
 * @param name = name of track
 */
export const SoundCloud = ({ url, name }: Props) => {
  return (
    <>
      <ReactPlayer url={url} width="100%" height="500px" controls />
      <div>
        Stream <HoverLink url={url} name={name} inline external /> on our SoundCloud
      </div>
    </>
  );
};
