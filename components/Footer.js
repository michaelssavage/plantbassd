import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./footer.module.scss";

const FootLink = ({ link, title }) => {
	return (
		<li>
			<Link href={link} rel="preload">
				<a className={styles.hoverLink}>{title}</a>
			</Link>
		</li>
	);
};

export default function FooterComponent() {
	return (
		<footer className={styles.descriptor}>
			<Container>
				<Row>
					<Col
						md={{ span: 6, order: 1 }}
						sm={{ span: 12, order: 2 }}
						xs={{ span: 12, order: 2 }}
					>
						<div className={styles.footerParagraph}>
							<h1>Plant Bass'd</h1>
							<p>
								Party Throwers and electronic music blog based
								in Edinburgh and Dublin.
							</p>

							<p className="small mb-2">
								{"© "} {new Date().getFullYear()}{" "}
								{" Plant Bass'd DJs. All rights reserved."}
							</p>
						</div>
					</Col>
					<Col
						md={{ span: 6, order: 2 }}
						sm={{ span: 12, order: 1 }}
						xs={{ span: 12, order: 1 }}
					>
						<Row>
							<Col>
								<h5 className="mb-3">Main Content</h5>
								<ul
									className={`${styles.footerColor} list-unstyled`}
								>
									<FootLink link="/" title="Home" />
									<FootLink link="/news" title="News" />
									<FootLink link="/radios" title="Radio" />
									<FootLink
										link="/takeovers"
										title="Takeovers"
									/>
								</ul>
							</Col>

							<Col>
								<h5 className="mb-3">Quick Links</h5>
								<ul
									className={`${styles.footerColor} list-unstyled`}
								>
									<FootLink
										link="/contact-us"
										title="About"
									/>
									<FootLink link="/#mixes" title="Mixes" />
									<FootLink
										link="/news"
										title="Fresh Juice"
									/>
									<FootLink
										link="/contact-us"
										title="Contact Us"
									/>
								</ul>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
