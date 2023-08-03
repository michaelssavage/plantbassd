import { ReactElement } from "react";
import { BandCamp, SoundCloud } from "components/MusicPlayers";
import styles from "./Slug.module.scss";

interface FavTrackProps {
  title: string;
  children: ReactElement;
  soundcloud?: string;
  bandcamp?: string;
}

/**
 * TextAndMedia is used in the news all together now
 */
export const TextAndMedia = (props: FavTrackProps) => {
  const { title, children, soundcloud, bandcamp } = props;

  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <h3>{title}</h3>
          <div className={styles.childrenContainer}>{children}</div>
        </div>
        <div className="col-md-7 col-sm-12">
          {soundcloud && <SoundCloud url={soundcloud} height="120px" />}
          {bandcamp && <BandCamp src={bandcamp} top />}
        </div>
      </div>
    </div>
  );
};
