import { Button } from "components/Button";
import styles from "./Premiere.module.scss";

export const Premiere = () => {
  return (
    <section className={styles.backgroundColorAndHeight}>
      <div className={styles.backgroundImage}>
        <div className={styles.frontText}>
          <h1>Premieres</h1>

          <div className="row mb-2 align-items-center">
            <p className={styles.profileText}>Listen here first to organic music releases.</p>

            <div className="col-auto ps-0">
              <Button to="/premieres" text="Hear More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
