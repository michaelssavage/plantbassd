import { useRellax } from "hooks";
import styles from "./Banner.module.scss";

export const Banner = () => {
  useRellax();

  return (
    <section>
      <div className={styles.bgWrap}></div>

      <div className={styles.frontText}>
        <div className={`animate ${styles.textShape}`}>
          <h1 className={styles.header}>PLANT BASS'D</h1>
        </div>
      </div>
    </section>
  );
};
