import Link from "next/link";
import { FallbackProps } from "react-error-boundary";
import styles from "./Error.module.scss";

export const ErrorFallback = ({ resetErrorBoundary, error }: FallbackProps) => {
  return (
    <div role="alert" className={styles.errorBG}>
      <div className={styles.errorPage}>
        <h1>OOPS! You've encountered an error</h1>
        <pre>{error.message}</pre>

        <div className="d-flex flex-row gap-2">
          <div className={styles.bottomBtn}>
            <Link href="/" className="btn btn-outline-dark" type="button">
              Home
            </Link>
          </div>
          <div className={styles.bottomBtn}>
            <Link
              href="#"
              className="btn btn-outline-dark"
              role="button"
              onClick={resetErrorBoundary}
            >
              Try again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
