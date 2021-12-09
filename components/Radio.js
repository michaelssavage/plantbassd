import { useRouter } from "next/router";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import { CardNoText } from "./Utilities";
import styles from "./radio.module.scss";

export default function Radio({ radios }) {
	const router = useRouter();

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
								link={`radios/${artist.slug}`}
							/>
						))}
					</Row>

					<div className="globalBottomBtn">
						<Button
							size="lg"
							variant="outline-dark"
							onClick={() => router.push("/radios")}
						>
							Discover More
						</Button>
					</div>
				</Container>
			</div>
		</>
	);
}
