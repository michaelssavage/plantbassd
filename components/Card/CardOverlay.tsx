import Link from "next/link";
import { Picture } from "components/Picture";
import styles from "./Card.module.scss";

interface CardProps {
  img: string;
  link: string;
  name: string;
}

export const CardOverlay = (cards: CardProps[]) => {
  return (
    <div className={`${styles.guestPics} container`}>
      <div className="row g-1">
        {cards.map((guest: CardProps) => (
          <div key={guest.name} className="col-4 col-md-4 col-lg-3 col-xl-2">
            <Link href={`https://instagram.com/${guest.link}`} className="pinkUnderline">
              <div className={`card imgContainer ${styles.cardStyle}`}>
                <Picture alt={guest.name} height={300} src={`/news/${guest.img}`} width={300} />
                <div className="guestOverlay">
                  <div className="guestTextOverlay">{guest.name}</div>
                </div>
              </div>
              <p className="nameAnchor">{guest.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
