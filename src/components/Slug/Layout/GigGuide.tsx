import { ReactElement } from "react";
import Link from "next/link";
import { Picture } from "components/Picture";
import { HoverLink } from "components/HoverLink";
import styles from "./Layout.module.scss";

interface GigGuideProps {
  title: string;
  pic: string;
  children: ReactElement;
  link?: string;
}

/**
 * GigGuide is used in the guides series
 */
export const GigGuide = (props: GigGuideProps) => {
  const { title, pic, children, link } = props;

  return (
    <div className={styles.containerMargins}>
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <Link href={`https://${link}`}>
            <Picture src={pic} alt={title} size={600} />
          </Link>
        </div>
        <div className="col-md-7 col-sm-12">
          <h3 className={styles.headerSpacing}>{title}</h3>
          <div className="mt-3 mb-2">{children}</div>
          {link && (
            <>
              Tickets here: <HoverLink url={link} external />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
