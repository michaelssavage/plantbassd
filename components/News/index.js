import React from "react";

import { Button, Col, Row } from "react-bootstrap";
import styles from "./news.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function News({ news }) {
	return (
		<div className={styles.newsHolder}>
			<Row>
				<Col className={styles.headerContainer} lg={5} md={5} xs={12}>
					<h1 className={styles.header}>Plant Bass'd News</h1>
					<p>New and notable, fresh juice, and upcoming events.</p>

					<Button
						size="lg"
						variant="outline-dark"
						onClick={() => Router.push("/news")}
					>
						Read More 🛸
					</Button>
				</Col>
				<Col
					key={news.slug}
					className={styles.mostRecent}
					lg={7}
					md={7}
					xs={12}
				>
					<Link href={`news/${news.slug}`} passHref>
						<div className={`card ${styles.cardStyle}`}>
							<Image
								className="card-img-top"
								src={news.frontmatter.pic}
								alt={news.frontmatter.title}
								width={500}
								height={500}
							/>
							<div className="card-body">
								<p className="small">{news.frontmatter.date}</p>
								<h5 className="card-title">
									{news.frontmatter.bio}
								</h5>
							</div>
						</div>
					</Link>
				</Col>
			</Row>
		</div>
	);
}
