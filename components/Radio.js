import { CardNoText } from "components/Card";
import React from "react";
import { Container, Row } from "react-bootstrap";

import styles from "@/styles/components.module.scss";

import { DiscoverMoreBtn } from "./Btns";

export default function Radio({ radios }) {
	return (
		<>
			<div className={styles.bgBlue}>
				<div className="globalSection">
					<h1 name="radios" className="header">
						Guest Radio
					</h1>
					<p>Plant Bass'd Radio Mixes.</p>
				</div>
				<Container>
					<Row className="g-2">
						{radios.map((artist) => (
							<CardNoText
								key={artist.frontmatter.title}
								post={artist}
								link={`/radios/${artist.slug}`}
							/>
						))}
					</Row>

					<DiscoverMoreBtn link="/radios" />
				</Container>
			</div>
		</>
	);
}
