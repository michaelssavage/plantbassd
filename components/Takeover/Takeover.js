import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "next/link";
import ArtistModal from "../Modal/Modal.js";
import styles from "./takeover.module.scss";

export async function getStaticProps() {
	const res = await fetch("./data.json");
	const takeovers = await res.json();

	const numTakeovers = takeovers.length;
	const { takeoverArtists } = takeovers
		.slice(numTakeovers - 3, numTakeovers)
		.reverse();

	return {
		props: { takeoverArtists },
	};
}

export default function Takeover(takeoverArtists) {
	const [artistInfo, setArtist] = useState({
		name: "",
		description: "",
		show: false,
	});

	const handleClose = () => setArtist({ show: false });
	const handleShow = (artist) => {
		setArtist({
			name: artist.name,
			description: artist.description,
			show: true,
		});
	};

	return (
		<div className={styles.bgGreen}>
			<h1 className={styles.toHeader}>Plant Bass'd Takeovers</h1>
			<Container>
				<Row xs={1} md={1}>
					{takeoverArtists.map((artist, index) => (
						<Col key={index} lg={true} className="py-2">
							<Card
								className={`${styles.cardStyle} mx-auto`}
								onClick={() => handleShow(artist)}
							>
								<Card.Img
									variant="top"
									src={"/takeovers/" + artist.image + ".jpg"}
									alt={artist.name}
								/>
							</Card>
						</Col>
					))}
				</Row>

				<Row>
					<Col>
						<div
							className={`${styles.bottomBtn} d-flex flex-column align-items-center`}
						>
							<Link to="/takeovers">
								<Button size="lg" variant="outline-light">
									Read More 🛸
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>

			<ArtistModal
				artist={artistInfo}
				onClick={handleClose}
				onHide={handleClose}
			/>
		</div>
	);
}
