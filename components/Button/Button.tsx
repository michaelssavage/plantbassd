import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  to: string;
  text: string;
}

export const Button = ({ to, text }: ButtonProps) => {
  return (
    <Link href={to} className={styles.button} role="button">
      {text}
    </Link>
  );
};
