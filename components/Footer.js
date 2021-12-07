import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./footer.module.scss";

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
							<li>
								<Link href="/">
									<a className={styles.hoverLink}>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/contact-us">
									<a className={styles.hoverLink}>About</a>
								</Link>
							</li>
							<li>
								<Link href="/news">
									<a className={styles.hoverLink}>News</a>
								</Link>
							</li>
							<li>
								<Link href="/contact-us">
									<a className={styles.hoverLink}>
										Contact Us
									</a>
								</Link>
							</li>
						</ul>
					</Col>

					<Col>
						<h5 className="text-black mb-3">Quick Links</h5>
						<ul className={`${styles.footerColor} list-unstyled`}>
							<li>
								<Link href="/#mixes">
									<a className={styles.hoverLink}>Mixes</a>
								</Link>
							</li>
							<li>
								<Link href="/radios">
									<a className={styles.hoverLink}>Radio</a>
								</Link>
							</li>
							<li>
								<Link href="/takeovers">
									<a className={styles.hoverLink}>
										Takeovers
									</a>
								</Link>
							</li>
							<li>
								<Link href="/news">
									<a className={styles.hoverLink}>
										Fresh Juice
									</a>
								</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
