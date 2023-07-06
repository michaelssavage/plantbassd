import Link from "next/link";
import { Icon } from "./Icon";
import styles from "./SocialButton.module.scss";
import { SocialProps } from "./types";

export const SocialButton = ({ name, url }: SocialProps) => {
  return (
    <Link href={url} className={styles.iconBox} rel="noopener noreferrer" target="_blank">
      <Icon icon={name} styling={styles.socialIcon} />
    </Link>
  );
};
