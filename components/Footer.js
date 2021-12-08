import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./footer.module.scss";

const FootLink = ({ link, title }) => {
	return (
		<li>
			<Link href={link}>
				<a className={styles.hoverLink}>{title}</a>
			</Link>
		</li>
	);
};

export default function FooterComponent() {
	return (
		<footer className="w-100 flex-shrink-0">
			<Container className={styles.descriptor}>
				<Row className="gy-4 gx-5">
					<Col md={6} sm={12}>
						<div className={styles.footerParagraph}>
							<h1 className="text-black">Plant Bass'd.</h1>
							<p className="small">
								Party Throwers and electronic music blog based
								in Edinburgh and Dublin. Enquiries:
								plantbassddjs@gmail.com
							</p>

							<p className="small mb-0">
								{"© "} {new Date().getFullYear()}{" "}
								{" Plant Bass'd DJs. All rights reserved."}
							</p>
						</div>
					</Col>

					<Col>
						<h5 className="text-black mb-3">Main Content</h5>
						<ul className={`${styles.footerColor} list-unstyled`}>
							<FootLink link="/" title="Home" />
							<FootLink link="/news" title="News" />
							<FootLink link="/contact-us" title="About" />
							<FootLink link="/contact-us" title="Contact Us" />
						</ul>
					</Col>

					<Col>
						<h5 className="text-black mb-3">Quick Links</h5>
						<ul className={`${styles.footerColor} list-unstyled`}>
							<FootLink link="/#mixes" title="Mixes" />
							<FootLink link="/radios" title="Radio" />
							<FootLink link="/takeovers" title="Takeovers" />
							<FootLink link="/news" title="Fresh Juice" />
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
