import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { CardWithText } from "../utils";
import styles from "./news.module.scss";

export default function News({ news }) {
	const router = useRouter();

	return (
		<section>
			<Container>
				<Row className="p-5">
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
							<div>
								<Button
									size="lg"
									variant="outline-dark"
									onClick={() => router.push("/news")}
								>
									Discover More
								</Button>
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
			</Container>
		</section>
	);
}
