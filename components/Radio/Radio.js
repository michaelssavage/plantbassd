import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./radio.module.scss";
import Link from "next/link";
import Router from "next/router";

export default function Radio({ radios }) {
	return (
		<>
			<div className={styles.bgBlue}>
				<h1 className={`globalHeader ${styles.header}`}>Guest Mixes</h1>
				<Container>
					<Row>
						{radios.map((artist) => (
							<Col
								key={artist.frontmatter.name}
								xs={6}
								className="py-2"
							>
								<Link href={`radios/${artist.slug}`} passHref>
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
							onClick={() => Router.push("/radios")}
						>
							Read More 🛸
						</Button>
					</Row>
				</Container>
			</div>
		</>
	);
}
