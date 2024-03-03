import Link from "next/link";
import { plantbassdInstagram } from "utils/constants";
import styles from "./SocialIcon.module.scss";
import { Icon } from "../Icon";
import { IconType } from "../types";

interface SocialIconI {
  text: IconType;
}

const link = {
  instagram: plantbassdInstagram,
  soundcloud: "https://soundcloud.com/plantbassdworld/sets/plant-bassd-premieres",
  bandcamp: "https://bandcamp.com/oisincampbellbap",
  email: "mailto: plantbassdworld@gmail.com",
  "resident advisor": "https://ra.co/promoters/103854",
};

export const SocialIcon = ({ text }: SocialIconI) => {
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
