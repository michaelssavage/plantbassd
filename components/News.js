import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { CardWithText } from "./Card";
import styles from "./styles/news.module.scss";

export default function News({ news }) {
	const router = useRouter();
	const mostRecent = news.slice(0, 2);
	const otherNews = news.slice(2, 6);

	return (
		<section>
			<Container>
				<div className="m-5">
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
								<div className={styles.button}>
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
						{mostRecent.map((story) => (
							<CardWithText
								key={story.frontmatter.title}
								post={story}
								link={`/news/${story.slug}`}
							/>
						))}
					</Row>
					<Row>
						<ul
							className={`mt-2 list-group ${styles.listHorizontal}`}
						>
							{otherNews.map((story) => (
								<li
									key={story.frontmatter.title}
									onClick={() =>
										router.push(`/news/${story.slug}`)
									}
									className={`list-group-item flex-fill ${styles.cardList}`}
								>
									{story.frontmatter.date}
									<br /> {story.frontmatter.title}
								</li>
							))}
						</ul>
					</Row>
				</div>
			</Container>
		</section>
	);
}
