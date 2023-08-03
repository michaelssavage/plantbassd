import { ReactElement } from "react";
import { Picture } from "components/Picture";
import { BandCamp, SoundCloud } from "components/MusicPlayers";
import { HoverLink } from "components/HoverLink";

interface FavTrackProps {
  title: string;
  pic: string;
  children: ReactElement;
  soundcloud?: string;
  bandcamp?: string;
  youtube?: string;
  link?: string;
}

/**
 * FavTrack is used in the top ten release series
 */
export const FavTrack = (props: FavTrackProps) => {
  const { title, pic, children, soundcloud, bandcamp, youtube, link } = props;

  return (
    <div className="mb-5">
      <div className="row">
        <h3>{title}</h3>
        <div className="col-md-5 col-sm-12">
          {!youtube && <Picture src={pic} alt={title} size={600} />}
          {youtube && <SoundCloud url={youtube} />}
        </div>
        <div className="col-md-7 col-sm-12">
          {soundcloud && <SoundCloud url={soundcloud} height="120px" />}
          {bandcamp && <BandCamp src={bandcamp} top />}
          <div className="mt-3 mb-2">{children}</div>
          {link && (
            <>
              Listen here: <HoverLink url={link} external />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
