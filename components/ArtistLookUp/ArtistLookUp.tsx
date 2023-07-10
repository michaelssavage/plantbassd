import { guestList, headliners } from "arrays/previous-guests";
import { HoverLink } from "components/HoverLink";
import { Picture } from "components/Picture";
import styles from "./LookUp.module.scss";

interface LookUpProps {
  anames: string[];
}

const djs = guestList.concat(headliners);

const Artist = ({ name }: { name: string }) => {
  const dj = djs.find((dj) => name.toLowerCase() === dj.name.toLowerCase());
  if (dj) {
    return (
      <div className={`col-12 col-sm-4 col-md-3 ${styles.artistCard}`}>
        <Picture alt={`${dj.name} press pic`} size={300} src={`/news/${dj.img}`} />
        <HoverLink url={`www.instagram.com/${dj.link}`} name={dj.name} external />
      </div>
    );
  }
};

export const ArtistLookUp = ({ anames }: LookUpProps) => {
  return (
    <div className="row mb-5">
      {anames.map((name) => (
        <Artist key={name} name={name} />
      ))}
    </div>
  );
};
