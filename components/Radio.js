import Router from "next/router";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import { CardNoText } from "./Card";
import styles from "./radio.module.scss";

export default function Radio({ radios }) {
	return (
		<>
			<div className={styles.bgBlue}>
				<div className="globalSection">
					<h1 name="radios" className="header">
						Guest Radio
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
				<Container>
					<Row className="g-2">
						{radios.map((artist) => (
							<CardNoText
								key={artist.frontmatter.title}
								post={artist}
								link={`radios/${artist.slug}`}
							/>
						))}
					</Row>

					<div className="globalBottomBtn">
						<Button
							size="lg"
							variant="outline-light"
							onClick={() => Router.push("/radios")}
						>
							Discover More
						</Button>
					</div>
				</Container>
			</div>
		</>
	);
}
