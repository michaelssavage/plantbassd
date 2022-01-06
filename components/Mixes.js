import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles/mixes.module.scss";

export default function ArtistCard() {
	const router = useRouter();

	return (
		<section className={styles.mixSection}>
			<Container>
				<Row className="align-items-center">
					<Col lg={6} md={12}>
						<div className={styles.mixImages}>
							<Image
								src="/mixes/7-set.jpg"
								alt="setradio logo"
								height="400"
								width="400"
							/>
							<div className={styles.topImage}>
								<Image
									src="/mixes/1-itsnotradio.jpg"
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
								Hear the latest club tracks when we play Jungle,
								Techno, Garage, Rave selects, and more. Listen
								on EHFM, ITSNOTRADIO, and Aurora, and our
								Soundcloud.
							</p>

							<p>
								Chill out and listen to some of our mixes that
								include House, Disco, and Groovy numbers. Find
								these on SET RADIO and our Soundcloud page.
							</p>
							<div className={styles.clubButton}>
								<button
									type="button"
									className={`${styles.hoverBtn} btn btn-outline-dark btn-lg`}
									onClick={() => router.push("/mixes")}
								>
									Discover More
								</button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
