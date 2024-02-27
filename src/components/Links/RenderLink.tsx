import Link from "next/link";
import { ReactNode } from "react";
import styles from "styles/links.module.scss";

interface RenderLinkProps {
  link: string;
  img: string;
  children: ReactNode;
}

export const RenderLink = ({ link, img, children }: RenderLinkProps) => {
  const classname = `btn btn-outline-dark ${styles.btnText} ${img && styles.btnIfImage}`;

  if (link.includes("www.plantbassd.com")) {
    return (
      <Link href={new URL(link).pathname} className={classname} role="button">
        {children}
      </Link>
    );
  }
  return (
    <a href={link} className={classname} rel="noopener noreferrer" role="button" target="_blank">
      {children}
    </a>
  );
};
