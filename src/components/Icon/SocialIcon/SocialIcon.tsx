import Link from "next/link";
import { plantbassdInstagram } from "utils/constants";
import styles from "./SocialIcon.module.scss";
import { Icon } from "../Icon";
import { SocialIconType } from "../types";

const link = {
  instagram: plantbassdInstagram,
  soundcloud: "https://soundcloud.com/plantbassdworld/sets/plant-bassd-premieres",
  bandcamp: "https://bandcamp.com/oisincampbellbap",
  email: "mailto: plantbassdworld@gmail.com",
  "resident advisor": "https://ra.co/promoters/103854",
  spotify: "https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76",
};

export const SocialIcon = ({ text }: { text: SocialIconType }) => {
  return (
    <Link
      aria-label={text}
      href={link[text]}
      className={styles.iconBox}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.textBox}>
        <Icon name={text} />
        <p>{text}</p>
      </div>
    </Link>
  );
};
