import { links } from "arrays/footer-links";
import { HoverLink } from "components/HoverLink";
import { sortAlphabetically } from "utils";
import { Signup } from "components/Signup";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="row mb-0 pb-0">
        <div className="col-md-6 col-sm-12 col-12">
          <h1 className={styles.sectionHeader}>Quick Links</h1>
          <p className={styles.linkSize}>
            {links.sort(sortAlphabetically).map((item, idx, arr) => (
              <span key={item.name}>
                <HoverLink url={item.link} name={item.name} />
                {idx + 1 === arr.length ? "" : " // "}
              </span>
            ))}
          </p>
        </div>

        <div className="mb-2 col-md-6 col-sm-12 col-12">
          <Signup linktree />
        </div>
      </div>
      <div className="row m-0 pb-2">
        <div className={styles.siteBy}>
          <p className="small m-0">
            Site by <HoverLink url="https://www.instagram.com/michaelsaverage" name="Michael." />
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
