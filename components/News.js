import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "./news.module.scss";

export default function News({ news }) {
	return (
		<section>
			<Container>
				<Row>
					<Col
						className={styles.headerContainer}
						lg={6}
						md={12}
						xs={12}
					>
						<div className={styles.content}>
							<h1 name="news" className="header">
								Latest News
							</h1>
							<p>
								Nunc auctor urna tellus, a vulputate urna
								bibendum sed. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Maecenas dictum
								rhoncus lectus eget gravida.
							</p>
							<p>
								Nulla vel tortor vitae tortor aliquet ornare
								rhoncus sit amet felis. Etiam dui dui, mattis
								placerat nulla at, facilisis feugiat leo. Sed
								accumsan mattis diam in malesuada. Duis ex
								lacus, euismod a varius quis, faucibus a massa.
							</p>
							<div className={styles.alignment}>
								<Button
									size="lg"
									variant="outline-dark"
									onClick={() => Router.push("/news")}
								>
									Discover More
								</Button>
							</div>
						</div>
					</Col>
					<Col key={news.slug} lg={6} md={12} xs={12}>
						<Link href={`news/${news.slug}`} passHref>
							<div className={`card ${styles.cardStyle}`}>
								<Image
									className="card-img-top"
									src={news.frontmatter.pic}
									alt={news.frontmatter.title}
									width={400}
									height={400}
									layout="responsive"
								/>
								<div className="card-body">
									<p className="small">
										{news.frontmatter.date}
									</p>
									<h5 className="card-title">
										{news.frontmatter.bio}
									</h5>
								</div>
							</div>
						</Link>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
