import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiSoundcloudLine } from "react-icons/ri";

import styles from "./mixes.module.scss";

export default function ArtistCard() {
	return (
		<section className={styles.mixSection}>
			<Container>
				<Row className="align-items-center">
					<Col lg={6} md={12}>
						<div className={styles.mixImages}>
							<Image
								src="/setradio.jpg"
								alt="setradio logo"
								height="400"
								width="400"
							/>
							<div className={styles.topImage}>
								<Image
									src="/itsnotradio.jpg"
									alt="itsnotradio logo"
									height="400"
									width="400"
								/>
							</div>
						</div>
					</Col>

					<Col lg={6} md={12}>
						<div className={styles.clubDescriptor}>
							<h1 name="mixes" className="header">
								Mixes
							</h1>
							<p>
								We don't stick to one genre. Hear the latest
								club tracks when we play Jungle, Techno, Garage,
								Rave selects, and more. Listen on EHFM,
								ITSNOTRADIO, and Aurora, and our Soundcloud.
							</p>

							<p>
								Take it easy and listen to some of our chill
								mixes that include House, Disco, and Groovy
								numbers. Find these on SET RADIO and our
								Soundcloud page.
							</p>
							<div className={styles.clubButton}>
								<button
									type="button"
									className={`${styles.hoverBtn} btn btn-outline-dark btn-lg`}
									href="https://soundcloud.com/plantbassddjs"
								>
									<RiSoundcloudLine /> Listen Now
								</button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
