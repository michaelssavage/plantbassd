import { HoverLink } from "components/HoverLink";

interface Props {
  src: string;
  url: string;
  name: string;
}

/**
 *
 * @param src = embedded player src
 * @param url = soundcloud url
 * @param name = name of track
 */
export const SoundCloud = ({ src, url, name }: Props) => {
  return (
    <>
      <iframe width="100%" height="300" allow="autoplay" src={src} />
      <div>
        Stream <HoverLink url={url} name={name} inline external /> on our SoundCloud
      </div>
    </>
  );
};
