import React from "react";
import Navbar from "../../components/Navbar";
import { CardWithText } from "../../components/Card";
import Footer from "../../components/Footer";
import { Button, Container, Row } from "react-bootstrap";
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

					<p className={styles.texter}>
						News about Fresh Juice, Gigs, and all things plant
						bass'd.
					</p>

					<Row className="g-5">
						{articles.map((article) => (
							<CardWithText
								post={article}
								link={`news/${article.slug}`}
							/>
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
