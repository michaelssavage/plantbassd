import styles from "./loading.module.scss";

export const Loading = ({ button }: { button?: boolean }) => {
  return (
    <div className={button ? styles.button : styles.loading}>
      <div className={button ? styles.btnBorder : styles.border}>
        <span className={styles.hidden}>Loading...</span>
      </div>
    </div>
  );
};
