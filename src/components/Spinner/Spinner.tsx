import styles from "./Spinner.module.scss";

export const Spinner = ({ button }: { button?: boolean }) => {
  return (
    <div className={button ? styles.button : styles.loading}>
      <div className={button ? styles.btnBorder : styles.border}>
        <span className={styles.hidden}>Loading...</span>
      </div>
    </div>
  );
};
