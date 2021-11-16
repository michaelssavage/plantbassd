import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "./takeover.module.scss";

export default function Takeover({ posts }) {
	return (
		<div className={styles.bgGreen}>
			<h1 className={styles.toHeader}>Plant Bass'd Takeovers</h1>
			<Container>
				<Row xs={1} md={1}>
					{posts.map((artist, index) => (
						<Col key={index} lg={true} className="py-2">
							<Link href={`takeover/${artist.slug}`}>
								<Card className={styles.cardStyle}>
									<Card.Img
										variant="top"
										src={artist.frontmatter.pic}
										alt={artist.frontmatter.name}
									/>
								</Card>
							</Link>
						</Col>
					))}
				</Row>

				<Row>
					<Col>
						<div
							className={`${styles.bottomBtn} d-flex flex-column align-items-center`}
						>
							<Button size="lg" variant="outline-light">
								Read More 🛸
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
