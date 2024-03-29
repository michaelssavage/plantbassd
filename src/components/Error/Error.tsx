import Link from "next/link";

import styles from "./Error.module.scss";

interface ErrorProps {
  error?: string;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className={styles.errorBG}>
      <div className={styles.errorPage}>
        <h1>OOPS! You've encountered an error</h1>
        {error !== undefined ? <p>{error}</p> : null}

        <div className="d-flex flex-row gap-2">
          <div className={styles.bottomBtn}>
            <Link href="/" className="btn btn-outline-dark" role="button">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
