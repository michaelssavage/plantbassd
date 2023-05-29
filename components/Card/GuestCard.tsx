import Link from "next/link";
import { Picture } from "components/Picture";
import styles from "./Card.module.scss";

interface GuestCardProps {
  img: string;
  link: string;
  name: string;
}

export const GuestCard = (cards: GuestCardProps[]) => {
  return (
    <div className={styles.guestPics}>
      <div className="row g-1">
        {cards.map((guest: GuestCardProps) => (
          <div key={guest.name} className="col-4 col-md-4 col-lg-3 col-xl-2">
            <Link
              href={`https://instagram.com/${guest.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`card imgContainer ${styles.cardStyle}`}>
                <Picture alt={guest.name} size={300} src={`/news/${guest.img}`} />
                <div className="guestOverlay">
                  <div className="guestTextOverlay">{guest.name}</div>
                </div>
              </div>
            </Link>
            <p className="nameAnchor">{guest.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
