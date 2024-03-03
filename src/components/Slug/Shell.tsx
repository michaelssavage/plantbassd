import { ReactNode } from "react";
import styles from "./Slug.module.scss";

export const Shell = ({ children }: { children: ReactNode }) => {
  return <div className={styles.slugContainer}>{children}</div>;
};
