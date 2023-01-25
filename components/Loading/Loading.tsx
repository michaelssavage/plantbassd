import styles from "./loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.border}>
        <span className={styles.hidden}>Loading...</span>
      </div>
    </div>
  );
};
