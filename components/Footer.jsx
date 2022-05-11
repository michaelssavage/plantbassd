import { column1, column2 } from "arrays/FooterLinks";
import Link from "next/link";
import PropTypes from "prop-types";

import styles from "@/styles/footer.module.scss";

function FootCol({ column }) {
  return (
    <ul className={styles.footerColor}>
      {column.map((item) => (
        <li key={item.title}>
          <Link href={item.link}>
            <a className="blackAnchor">{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function FooterComponent() {
  return (
    <footer className={styles.descriptor}>
      <div className="container">
        <div className="row">
          <div
            className={`
						order-md-1 col-md-6  
						order-sm-2 col-sm-12  
						order-2 col-12`}
          >
            <div className={styles.footerParagraph}>
              <h1>Plant Bass'd</h1>
              <p>
                {`Profiling the experimental dance music world and
								throwing parties in between. EDI/ DUB/ GLA. Site
								by `}
                <a
                  className="blackAnchor"
                  href="https://www.instagram.com/michaelsaverage/"
                >
                  Michael.
                </a>
              </p>

              <p className="small mb-2">
                {`© `} {new Date().getFullYear()}
                {` Plant Bass'd. All rights reserved.`}
              </p>
            </div>
          </div>

          <div
            className={`
						order-md-2 col-md-6  
						order-sm-1 col-sm-12  
						order-1 col-12`}
          >
            <div className="row">
              <div className="col">
                <h3 className="mb-3">Main Content</h3>
                <FootCol column={column1} />
              </div>

              <div className="col">
                <h3 className="mb-3">Quick Links</h3>
                <FootCol column={column2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

FootCol.propTypes = {
  column: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
