import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { CardWithText } from "./Card";
import styles from "./news.module.scss";

export default function News({ news }) {
	const router = useRouter();

	return (
		<section>
			<Container>
				<div className="m-4">
					<Row>
						<Col
							className={styles.headerContainer}
							lg={6}
							md={12}
							xs={12}
						>
							<div className={styles.content}>
								<h1
									name="news"
									className={`header ${styles.mobileHead}`}
								>
									Latest News
								</h1>
								<p>
									Catch the latest about our Fresh Juice
									series, Plant Bass'd Sweatbox Events,
									upcoming gigs, and much more.
								</p>
								<p>
									Keep up to date on our Instagram,{" "}
									<a
										className={styles.anchor}
										href="http://instagra.com/plantbassddjs"
									>
										@plantbassddjs
									</a>
									.
								</p>
								<div>
									<button
										type="button"
										className="btn btn-outline-dark btn-lg"
										onClick={() => router.push("/news")}
									>
										Discover More
									</button>
								</div>
							</div>
						</Col>
						{news.map((story) => (
							<CardWithText
								key={story.frontmatter.title}
								post={story}
								link={`news/${story.slug}`}
							/>
						))}
					</Row>
				</div>
			</Container>
		</section>
	);
}
