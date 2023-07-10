import { Picture } from "components/Picture";
import { sortAlphabetically } from "utils";
import styles from "./PreviousGuest.module.scss";
import { PreviousGuestProps, PreviousGuestType } from "./types";

export const PreviousGuest = ({ guests, setModalData, setShow }: PreviousGuestProps) => {
  const handleGuestClick = (guest: PreviousGuestType) => {
    setModalData(guest);
    setShow(true);
  };

  return (
    <div className="row g-1">
      {guests.sort(sortAlphabetically).map((guest: PreviousGuestType) => (
        <div
          key={guest.name}
          onClick={() => handleGuestClick(guest)}
          className={`col-12 col-md-4 col-lg-3 ${styles.cardStyle}`}
        >
          <Picture alt={guest.name} size={300} src={`/news/${guest.img}`} />
          <p className={`nameAnchor ${styles.artistName}`}>{guest.name}</p>
        </div>
      ))}
    </div>
  );
};
