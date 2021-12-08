import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
								src="/images/setradio.jpg"
								alt="setradio logo"
								height="400"
								width="400"
							/>
							<div className={styles.topImage}>
								<Image
									src="/images/itsnotradio.jpg"
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
								Club Tracks Jungle Techno Garage Rave, EHFM
								ITSNOTRADIO bibendum sed. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit. Maecenas
								dictum rhoncus lectus eget gravida.
							</p>

							<p>
								Chill Mixes House Disco Groovy, SET RADIO urna
								bibendum sed. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Maecenas dictum
								rhoncus lectus eget gravida.
							</p>
							<div className={styles.clubButton}>
								<Button
									size="lg"
									href="https://soundcloud.com/plantbassddjs"
									variant="outline-dark"
									className={styles.hoverBtn}
								>
									<RiSoundcloudLine /> Listen Now
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
