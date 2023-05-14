import { links } from "arrays/footer-links";
import { HoverLink } from "components/HoverLink";
import { sortAlphabetically } from "utils";
import { Signup } from "components/Newsletter/Signup";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="row mb-0 pb-0">
        <div className="col-md-6 col-sm-12 col-12">
          <h1 className={styles.sectionHeader}>Plant Bass'd</h1>
          <div className={styles.footerParagraph}>
            <p className={styles.bio}>
              Profiling the experimental dance music world & throwing parties in between.
            </p>
          </div>

          <div className="col">
            <h3>Quick Links</h3>
            <p>
              {links.sort(sortAlphabetically).map((item, idx, arr) => (
                <span key={item.name}>
                  <HoverLink url={item.link} name={item.name} inline />

                  {idx + 1 === arr.length ? "" : " // "}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="mb-2 col-md-6 col-sm-12 col-12">
          <Signup linktree />
        </div>
      </div>
      <div className="row m-0 pb-2">
        <div className={styles.siteBy}>
          <p className="small m-0">
            Site by{" "}
            <HoverLink url="www.instagram.com/michaelsaverage/" name="Michael." inline external />
          </p>
        </div>
        <div className={styles.allRights}>
          <p className="small m-0">
            {"© "} {new Date().getFullYear()}
            {" Plant Bass'd. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};
