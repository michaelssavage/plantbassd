import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { CardNoText } from "../Card";
import styles from "./takeover.module.scss";
import Router from "next/router";

export default function Takeover({ takeovers }) {
	return (
		<div className={styles.bgGreen}>
			<h1 className={`globalHeader ${styles.header}`}>Takeovers</h1>
			<Container>
				<Row>
					{takeovers.map((artist) => (
						<CardNoText
							post={artist}
							link={`takeovers/${artist.slug}`}
						/>
					))}
				</Row>

				<Row className="globalBottomBtn">
					<Button
						size="lg"
						variant="outline-light"
						onClick={() => Router.push("/takeovers")}
					>
						Read More 🛸
					</Button>
				</Row>
			</Container>
		</div>
	);
}
