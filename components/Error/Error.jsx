import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./Error.module.scss";
import GoBack from "@/btns/GoBack";

export default function Error({ error }) {
  return (
    <div className={styles.errorBG}>
      <div className={styles.errorPage}>
        <h1>OOPS! You've encountered an error</h1>
        {error !== undefined ?? <p>{`${error}`}</p>}

        <div className="d-flex flex-row gap-2">
          <div className={styles.bottomBtn}>
            <Link href="/">
              <a className="btn btn-outline-dark" type="button">
                Home
              </a>
            </Link>
          </div>
          <GoBack />
        </div>
      </div>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string,
};
