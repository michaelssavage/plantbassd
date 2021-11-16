import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./radio.module.scss";
import Link from "next/link";
import Router from "next/router";

export default function Radio({ radios }) {
	return (
		<>
			<div className={styles.bgBlue}>
				<h1 className={styles.mixHeader}>Guest Radio Mixes</h1>
				<Container>
					<Row xs={1} md={1}>
						{radios.map((artist, index) => (
							<Col key={index} lg={true} className="py-2">
								<Link href={`radios/${artist.slug}`}>
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
									onClick={() => Router.push("/radios")}
								>
									Read More 🛸
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
