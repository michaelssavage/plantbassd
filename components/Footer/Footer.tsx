import Link from "next/link";
import links from "arrays/footer-links";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className="footerSection">
      <div className="row mb-0 pb-0">
        <div className="col-md-6 col-sm-12 col-12">
          <h1 className="mb-0">Plant Bass'd</h1>
          <div className={styles.footerParagraph}>
            <p className={styles.justifyContent}>
              Profiling the experimental dance music world & throwing parties in between.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 col-12">
          <div className="row justify-content-between">
            <div className="col">
              <h3>Quick Links</h3>
              <p>
                {links.map((item, idx, arr) => (
                  <span key={item.title}>
                    <Link href={item.link} className="blackAnchor">
                      {item.title}
                    </Link>
                    {idx + 1 === arr.length ? "" : " // "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 pb-2">
        <div className="col px-0">
          <p className="small m-0">
            Site by{" "}
            <a
              className="blackAnchor"
              href="https://www.instagram.com/michaelsaverage/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Michael.
            </a>
          </p>
        </div>
        <div className="col ps-3 pe-0">
          <p className="small m-0 text-end">
            {"© "} {new Date().getFullYear()}
            {" Plant Bass'd. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
