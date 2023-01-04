import Link from "next/link";
import { Picture } from "components/Picture";
import styles from "./Card.module.scss";

interface CardProps {
  guest: {
    img: string;
    link: string;
    name: string;
  };
}

export const CardExternal = ({ guest }: CardProps) => {
  return (
    <div className="col-4 col-md-4 col-lg-3 col-xl-2">
      <Link href={guest.link} className="pinkUnderline">
        <div className={`card imgContainer ${styles.cardStyle}`}>
          <Picture alt={guest.name} height={200} src={`/news/${guest.img}`} width={200} />
          <div className="guestOverlay">
            <div className="guestTextOverlay">{guest.name}</div>
          </div>
        </div>
        <p className="nameAnchor">{guest.name}</p>
      </Link>
    </div>
  );
};
