import { HoverLink } from "components/HoverLink";

interface Props {
  src: string; // embedded player src
  url: string; // soundcloud url
  name: string; // name of track
}

export const SoundCloud = ({ src, url, name }: Props) => {
  return (
    <>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
      />
      <div>
        Stream <HoverLink url={url} name={name} inline external /> on Plant Bass'd SoundCloud
      </div>
    </>
  );
};
