import Link from "next/link";

import { Picture } from "components/Picture";
import styles from "styles/slug.module.scss";

interface CardProps {
  pic: string;
  title: string;
  artist: string;
  page: string; // page links to artistW
  insta: string;
  link: string; // link is to instagram
}

export const CardWithButtons = (props: CardProps) => {
  const { pic, title, artist, page, insta, link } = props;

  return (
    <div className="col">
      <div className={styles.newsImage}>
        <Picture alt={title} height={500} src={pic} width={500} />
        <div className="row">
          <div className={`col ${styles.button}`}>
            <Link
              href={page}
              className={`${styles.hoverLink} text-nowrap btn btn-outline-dark btn-sm`}
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              {artist}
            </Link>
          </div>
          <div className={`col ${styles.button}`}>
            <Link
              href={link}
              className={`${styles.hoverLink} text-nowrap btn btn-outline-dark btn-sm`}
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              {insta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
