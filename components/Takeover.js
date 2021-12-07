import Router from "next/router";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import { CardNoText } from "./Card";
import styles from "./takeover.module.scss";

export default function Takeover({ takeovers }) {
	return (
		<div className={styles.bgGreen}>
			<div className="globalSection">
				<h1 name="takeovers" className="header">
					Takeovers
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
			</div>
			<Container>
				<Row className="g-2">
					{takeovers.map((artist) => (
						<CardNoText
							key={artist.frontmatter.title}
							post={artist}
							link={`takeovers/${artist.slug}`}
						/>
					))}
				</Row>

				<div className="globalBottomBtn">
					<Button
						size="lg"
						variant="outline-dark"
						onClick={() => Router.push("/takeovers")}
					>
						Discover More
					</Button>
				</div>
			</Container>
		</div>
	);
}
