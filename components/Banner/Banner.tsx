import { useRellax } from "hooks";
import styles from "./Banner.module.scss";

export default function Banner() {
  useRellax();

  return (
    <section>
      <div className={styles.bgWrap}></div>

      <div className={styles.frontText}>
        <div className={`animate ${styles.textShape}`}>
          <h1 className={styles.header}>Plant Bass'd</h1>

          <p className={styles.profileText}>
            Profiling the experimental dance music world and throwing parties in between.
          </p>
        </div>
      </div>
    </section>
  );
}
