import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import styles from "../page.module.scss";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { sortByDate } from "../../utils/sorter";

export default function NewsPage({ news, icons }) {
	const articles = news.reverse();
	return (
		<>
			<Navbar />
			<div className={styles.newsDiver}>
				<Container>
					<h1 className={`globalHeader ${styles.header}`}>
						Plant Bass'd News
					</h1>

					{/* <div className="radioText radioGrid"> */}

					<p className={styles.texter}>
						News about Fresh Juice, Gigs, and all things plant
						bass'd.
					</p>

					<Row className="g-3">
						{articles.map((article) => (
							<Col key={article.slug} lg={3} xs={6}>
								<Link
									href={`takeovers/${article.slug}`}
									passHref
								>
									<Card className="globalCardStyle">
										<Card.Img
											variant="top"
											src={article.frontmatter.pic}
											alt={article.frontmatter.title}
										/>
										<Card.Text>
											{article.frontmatter.bio}
										</Card.Text>
									</Card>
								</Link>
							</Col>
						))}
					</Row>

					<Row className={styles.buttonStyler}>
						<Button
							size="lg"
							variant="outline-light"
							onClick={() => Router.back()}
						>
							Go Back
						</Button>
					</Row>
				</Container>
			</div>

			<Footer icons={icons} />
		</>
	);
}

export async function getStaticProps() {
	// get files from the takeover directory
	const files = fs.readdirSync(path.join("posts/news"));

	//get Slug and frontmatter from posts
	const news = files.map((filename) => {
		const slug = filename.replace(".md", "");

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts/news", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	// icons svg src and the link associated with it.
	const iconsList = fs.readFileSync(
		path.join("posts/links/icons.md"),
		"utf-8"
	);
	const { data: iconMatter } = matter(iconsList);

	return {
		props: {
			news: news.sort(sortByDate),
			icons: iconMatter.icons,
		},
	};
}
