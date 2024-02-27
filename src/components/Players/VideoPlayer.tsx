import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

interface Props {
  url: string;
  height?: string;
  width?: string;
  text?: string;
}

export const VideoPlayer = ({ url, height = "1080", width = "1920", text }: Props) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <CldVideoPlayer src={url} height={height} width={width} autoPlay="on-scroll" muted loop />
      {text && <p className="smallText">(Video of {text})</p>}
    </div>
  );
};
