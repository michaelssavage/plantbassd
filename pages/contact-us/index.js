import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import Footer from "../../components/Footer";
import styles from "../../styles/contact.module.scss";

export default function ContactPage() {
	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/various/collage.jpg",
							amount: 0.4,
						},
					]}
					className="parallaxHeightChange"
				></ParallaxBanner>
			</ParallaxProvider>

			<div className={styles.container}>
				<Row>
					<Col>
						<h1 className={styles.header}>About Us</h1>
						<p>
							Plant Bass'd consists of Oisin Campbell, Michael
							Savage, and Peter Toal. Originally from Monaghan,
							Ireland the three lads have joined their different
							music tastes together to form an interesting,
							inclusive collective.
						</p>
						<h1 className={styles.header}>Contact Us</h1>
						<p>
							Email:{" "}
							<a
								className={styles.anchor}
								href="mailto:plantbassddjs@gmail.com"
							>
								plantbassddjs@gmail.com
							</a>
						</p>
						<p>
							Instagram:{" "}
							<a
								className={styles.anchor}
								href="https://www.instagram.com/plantbassddjs/"
							>
								@plantbassddjs
							</a>
						</p>
						<p>
							Site by:{" "}
							<a
								className={styles.anchor}
								href="https://www.github.com/michaelssavage"
							>
								Michael
							</a>
						</p>
					</Col>
					<Col>
						<div className={styles.imgHolder}>
							<Image
								src="/various/hoodie.jpg"
								alt="three lads"
								width="500"
								height="360"
							/>
						</div>
					</Col>
				</Row>
			</div>

			<Footer />
		</>
	);
}
