import Link from "next/link";
import { mainLinks } from "arrays/linktree";
import { Icon } from "components/Icon";
import styles from "components/Card/Card.module.scss";
import linkStyle from "styles/links.module.scss";

export const Discovery = () => {
  return (
    <div className="mt-2 row g-2">
      {mainLinks.map(({ link, name, title }) => (
        <div className="col-md-6 col-sm-12" key={title}>
          <Link href={link} className="anchorColor">
            <div className={`card h-100 ${styles.cardStyle}`}>
              <div
                className={`${styles.cardBody} card-body d-flex justify-content-center align-items-center`}
              >
                <Icon icon={name} styling={linkStyle.discoveryIcon} size="1.5rem" />
                <p className="m-0 p-0">{title}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
