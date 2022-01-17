import { CardNoText } from "components/Card";
import React from "react";
import { Container, Row } from "react-bootstrap";

import styles from "@/styles/components.module.scss";

import { DiscoverMoreBtn } from "./Btns";

export default function Takeover({ takeovers }) {
	return (
		<div className={styles.bgGreen}>
			<div className="globalSection">
				<h1 name="takeovers" className="header">
					Takeovers
				</h1>
				<p>Top Spotify Selects.</p>
			</div>
			<Container>
				<Row className="g-2">
					{takeovers.map((artist) => (
						<CardNoText
							key={artist.frontmatter.title}
							post={artist}
							link={`/takeovers/${artist.slug}`}
						/>
					))}
				</Row>

				<DiscoverMoreBtn link="/takeovers" />
			</Container>
		</div>
	);
}
