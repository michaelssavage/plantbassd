import { Picture } from "components/Picture";
import styles from "./PreviousGuest.module.scss";
import { PreviousGuestProps, PreviousGuestType } from "./types";

export const PreviousGuest = ({ artist, setModalData, setShow }: PreviousGuestProps) => {
  const handleGuestClick = (guest: PreviousGuestType) => {
    setModalData(guest);
    setShow(true);
  };

  return (
    <div
      key={artist.name}
      onClick={() => handleGuestClick(artist)}
      className={`col-4 col-sm-6 col-md-3  ${styles.cardStyle}`}
    >
      <Picture alt={artist.name} size={400} src={`/gigs/${artist.img}`} />
      <p className="nameAnchor">{artist.name}</p>
    </div>
  );
};
