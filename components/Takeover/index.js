import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./takeover.module.scss";
import Link from "next/link";
import Router from "next/router";

export default function Takeover({ takeovers }) {
	return (
		<div className={styles.bgGreen}>
			<h1 className={`globalHeader ${styles.header}`}>Takeovers</h1>
			<Container>
				<Row>
					{takeovers.map((artist) => (
						<Col key={artist.slug} xs={6} className="py-2">
							<Link href={`takeovers/${artist.slug}`} passHref>
								<Card className="globalCardStyle">
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
