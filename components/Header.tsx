import styles from "styles/component.module.scss";

interface HeaderProps {
  name: string;
  first: string;
  second?: string;
}

export default function Header({ name, first, second }: HeaderProps) {
  return (
    <h1 className={styles.sectionHeader} name={name}>
      <span className={styles.headerWord}>{first}</span>{" "}
      <span className={styles.headerWord}>{second}</span>
    </h1>
  );
}
