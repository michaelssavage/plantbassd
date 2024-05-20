import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  to: string;
  text: string;
  wide?: boolean;
}

export const Button = ({ to, text, wide = false }: ButtonProps) => {
  return (
    <Link href={to} className={`${styles.button} ${wide && styles.wide} shakeInfi`} role="button">
      {text}
    </Link>
  );
};
