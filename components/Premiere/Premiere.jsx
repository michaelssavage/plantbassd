import Link from "next/link";
import styles from "./Premiere.module.scss";

export default function Premiere() {
  return (
    <section className={styles.content_bg}>
      <div className={styles.bg_img}>
        <div className={styles.frontText}>
          <h1 className="header text-center">Plant Bass'd Premieres</h1>

          <p className={styles.profileText}>Listen here first to organic music releases.</p>

          <div className="col-auto px-0">
            <Link href="/premieres">
              <a className="text-nowrap btn btn-lg btn-outline-dark" role="button">
                Discover More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
