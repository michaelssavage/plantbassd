import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { CardNoText } from "../Card";
import styles from "./radio.module.scss";
import Router from "next/router";

export default function Radio({ radios }) {
	return (
		<>
			<div className={styles.bgBlue}>
				<h1 className={`globalHeader ${styles.header}`}>Guest Mixes</h1>
				<Container>
					<Row>
						{radios.map((artist) => (
							<CardNoText
								post={artist}
								link={`radios/${artist.slug}`}
							/>
						))}
					</Row>

					<Row className="globalBottomBtn">
						<Button
							size="lg"
							variant="outline-light"
							onClick={() => Router.push("/radios")}
						>
							Read More 🛸
						</Button>
					</Row>
				</Container>
			</div>
		</>
	);
}
