import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./takeover.module.scss";
import Link from "next/link";
import Router from "next/router";

export default function Takeover({ takeovers }) {
	return (
		<div className={styles.bgGreen}>
			<h1 className={styles.toHeader}>Plant Bass'd Takeovers</h1>
			<Container>
				<Row xs={1} md={1}>
					{takeovers.map((artist, index) => (
						<Col key={index} lg={true} className="py-2">
							<Link href={`takeovers/${artist.slug}`}>
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
							<Button
								size="lg"
								variant="outline-light"
								onClick={() => Router.push("/takeovers")}
							>
								Read More 🛸
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
