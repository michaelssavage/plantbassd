import { useRouter } from "next/router";
import React from "react";
import { Container, Row } from "react-bootstrap";

import { CardNoText } from "./Card";
import styles from "./styles/components.module.scss";

export default function Takeover({ takeovers }) {
	const router = useRouter();

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

				<div className="globalBottomBtn">
					<button
						type="button"
						className="btn btn-outline-dark btn-lg"
						onClick={() => router.push("/takeovers")}
					>
						Discover More
					</button>
				</div>
			</Container>
		</div>
	);
}
