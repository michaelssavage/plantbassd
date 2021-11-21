import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import Image from "next/image";
import styles from "./mixes.module.scss";

function ArrowSVG({ path }) {
	return (
		<svg
			className={styles.arrowSVG}
			aria-hidden="true"
			width="60"
			height="50"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d={path}
			></path>
		</svg>
	);
}

export default function ArtistCard() {
	return (
		<div className={styles.mixSection}>
			<h1 name="mixes" className={`globalHeader ${styles.header}`}>
				Mixes
			</h1>

			<Container>
				<Row className="align-items-center">
					<Col lg={12} xl={6} className={styles.imageFlex}>
						<a
							href="https://www.instagram.com/itsnotradio/"
							className={styles.radioImage}
						>
							<Image
								src="/images/itsnotradio.jpg"
								alt="itsnotradio logo"
								height="600"
								width="600"
							/>
						</a>
					</Col>

					<Col lg={12} xl={6} className={styles.clubDescriptor}>
						<h1>Club-Ready</h1>
						<h2>Heavy mixes for the club.</h2>
						<p>
							We've broadcasted Techno, Electro, Jungle on
							ITSNOTRADIO, Aurora, and Common Grounds.
						</p>
						<div className={styles.clubButton}>
							<ArrowSVG path="M17 8l4 4m0 0l-4 4m4-4H3" />
							<Button
								href="https://soundcloud.com/plantbassddjs/sets/club-mixes"
								variant="outline-dark"
								size="lg"
								className={styles.hoverBtn}
							>
								Listen Now
							</Button>
						</div>
					</Col>
				</Row>

				{/* Row 2 for chill section */}
				<Row className="align-items-center">
					<Col
						xs={{ span: 12, order: 2 }}
						sm={{ span: 12, order: 2 }}
						md={{ span: 12, order: 2 }}
						lg={{ span: 12, order: 2 }}
						xl={{ span: 6, order: 1 }}
					>
						<div className={styles.chillDescriptor}>
							<h1>Chill-out</h1>
							<h2>Easy listening selections.</h2>
							<p>
								We've broadcasted Disco, Dance, Electronic music
								for late risers on SET Radio.
							</p>
						</div>

						<div className={styles.chillButton}>
							<Button
								href="https://soundcloud.com/plantbassddjs/sets/dance-mixes"
								variant="outline-dark"
								size="lg"
								className={styles.hoverBtn}
							>
								Listen Now
							</Button>
							<ArrowSVG
								className={styles.arrowSVG}
								path="M7 16l-4-4m0 0l4-4m-4 4h18"
							/>
						</div>
					</Col>

					<Col
						xs={{ span: 12, order: 1 }}
						sm={{ span: 12, order: 1 }}
						md={{ span: 12, order: 1 }}
						lg={{ span: 12, order: 1 }}
						xl={{ span: 6, order: 2 }}
						className={styles.imageFlex2}
					>
						<a
							href="https://www.instagram.com/setsetsetsetsetset/"
							className={styles.radioImage}
						>
							<Image
								src="/images/setradio.jpg"
								alt="set radio logo"
								height="600"
								width="600"
							/>
						</a>
					</Col>
				</Row>

				<Row>
					<Col>
						<div className={styles.bottomBtn}>
							<Button
								size="lg"
								href="https://soundcloud.com/plantbassddjs"
								variant="outline-dark"
								className={styles.hoverBtn}
							>
								Check out our Soundcloud for more. 🛸
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
