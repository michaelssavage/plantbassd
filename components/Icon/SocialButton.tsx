import Link from "next/link";
import { Icon } from "./Icon";
import styles from "./SocialButton.module.scss";
import { SocialProps } from "./types";

export const SocialButton = ({ name, url, text }: SocialProps) => {
  return (
    <Link
      aria-label={name}
      href={url}
      className={styles.iconBox}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.textBox}>
        <Icon icon={name} styling={styles.socialIcon} />
        <p>{text}</p>
      </div>
    </Link>
  );
};
