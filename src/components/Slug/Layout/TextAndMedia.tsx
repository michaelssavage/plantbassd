import { ReactElement } from "react";
import { BandCamp, SoundCloud } from "components/Players";
import styles from "./Layout.module.scss";

interface FavTrackProps {
  title: string;
  children: ReactElement;
  soundcloud?: string;
  bandcamp?: string;
  youtube?: string;
}

/**
 * TextAndMedia is used in the news all together now
 */
export const TextAndMedia = (props: FavTrackProps) => {
  const { title, children, soundcloud, bandcamp, youtube } = props;

  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <h3>{title}</h3>
          <div className={styles.childrenContainer}>{children}</div>
        </div>
        <div className="col-md-7 col-sm-12">
          {soundcloud && <SoundCloud url={soundcloud} height="140px" />}
          {youtube && <SoundCloud url={youtube} height="240px" />}
          {bandcamp && <BandCamp src={bandcamp} top />}
        </div>
      </div>
    </div>
  );
};
