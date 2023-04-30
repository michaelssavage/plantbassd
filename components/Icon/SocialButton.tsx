import { Icon } from "./Icon";
import styles from "./icon.module.scss";

interface SocialProps {
  name: string;
  url: string;
  icon?: string;
  style?: string;
}

export const SocialButton = ({ name, url, icon, style }: SocialProps) => {
  return (
    <div className={`col-auto ${styles.socialBtns}`}>
      <a
        className={style}
        href={url}
        style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
        rel="noopener noreferrer"
        role="button"
        target="_blank"
      >
        <Icon icon={icon ? icon : name} /> {name}
      </a>
    </div>
  );
};
