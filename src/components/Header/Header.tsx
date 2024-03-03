import styles from "./Header.module.scss";

interface HeaderProps {
  first: string;
  second?: string;
}

export const Header = ({ first, second }: HeaderProps) => {
  return (
    <h1 className={styles.sectionHeader}>
      <span className={styles.headerWord}>{first}</span>{" "}
      <span className={styles.headerWord}>{second}</span>
    </h1>
  );
};
