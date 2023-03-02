import styles from "./Newsletter.module.scss";

interface StickyProps {
  handleStickyClick: () => void;
}

export const Sticky = ({ handleStickyClick }: StickyProps) => {
  return (
    <div className={styles.sticky} onClick={() => handleStickyClick()}>
      <span className={styles.text}>Sign up to Newsletter?</span>
    </div>
  );
};
