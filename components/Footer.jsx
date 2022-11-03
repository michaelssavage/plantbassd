import links from "arrays/footer-links";
import Link from "next/link";

import styles from "@/styles/footer.module.scss";

export default function FooterComponent() {
  return (
    <footer className="footerSection">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-12">
          <h1 className="mb-3">Plant Bass'd</h1>
          <div className={styles.footerParagraph}>
            <p className={styles.justifyContent}>
              profiling the experimental dance music world and throwing parties in between in EDI/ DUB/ GLA. Site by{" "}
              <a className="blackAnchor" href="https://www.instagram.com/michaelsaverage/">
                Michael.
              </a>
            </p>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 col-12">
          <div className="row">
            <div className="col">
              <h3 className="mb-3">Quick Links</h3>
              <p>
                {links.map((item, idx, arr) => (
                  <span key={item.title}>
                    <Link href={item.link}>
                      <a className="blackAnchor">{item.title}</a>
                    </Link>
                    {idx + 1 === arr.length ? "" : " // "}
                  </span>
                ))}
              </p>
            </div>

            <p className="small mb-2">
              {`© `} {new Date().getFullYear()}
              {` Plant Bass'd. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
