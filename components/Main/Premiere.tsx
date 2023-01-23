import Link from "next/link";
import styles from "./Premiere.module.scss";

export const Premiere = () => {
  return (
    <section className={styles.content_bg}>
      <div className={styles.bg_img}>
        <div className={styles.frontText}>
          <h1 className={styles.sectionHeader}>Plant Bass'd Premieres</h1>
          <p className={styles.profileText}>Listen here first to organic music releases.</p>
          <div className="col-auto px-0">
            <Link href="/premieres" className="mt-2 text-nowrap btn btn-outline-dark" role="button">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
