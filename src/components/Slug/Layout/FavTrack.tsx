import { ReactElement } from "react";
import { Picture } from "components/Picture";
import { BandCamp, SoundCloud, Spotify } from "components/Players";
import { HoverLink } from "components/HoverLink";

interface FavTrackProps {
  title: string;
  pic: string;
  children: ReactElement;
  soundcloud?: string;
  bandcamp?: string;
  youtube?: string;
  spotify?: string;
  link?: string;
}

/**
 * FavTrack is used in the top ten release series
 */
export const FavTrack = (props: FavTrackProps) => {
  const { title, pic, children, soundcloud, bandcamp, youtube, spotify, link } = props;

  return (
    <div className="mb-5">
      <div className="row">
        <h3>{title}</h3>
        <div className="col-sm-12 col-md-9 mt-3 mt-md-0">
          {soundcloud && <SoundCloud url={soundcloud} height="140px" />}
          {bandcamp && <BandCamp src={bandcamp} top />}
          {spotify && <Spotify src={spotify} />}
          <div className="mt-3 mb-2">{children}</div>
          {link && <HoverLink url={link} name={link} external />}
        </div>
        <div className="col-sm-12 col-md-3">
          {!youtube && <Picture src={pic} alt={title} size={600} />}
          {youtube && <SoundCloud url={youtube} />}
        </div>
      </div>
    </div>
  );
};
