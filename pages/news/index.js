import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { Container, Row } from "react-bootstrap";

import { CardWithText } from "../../components/Card";
import Footer from "../../components/Footer";
import { GoBack, sortByDate } from "../../components/Utilities";
import styles from "../../styles/page.module.scss";

export default function NewsPage({ news }) {
	return (
		<>
			<div className={styles.newsBG}>
				<Container>
					<h1 className={styles.bHeader}>Plant Bass'd News</h1>

					<p className={styles.bTexter}>
						News about Fresh Juice, Gigs, and all things Plant
						Bass'd.
					</p>

					<Row className="g-3">
						{news.map((story) => (
							<CardWithText
								key={story.frontmatter.title}
								post={story}
								link={`/news/${story.slug}`}
							/>
						))}
					</Row>

					<GoBack />
				</Container>
			</div>

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	// get files from the news directory
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

	return {
		props: {
			news: news.sort(sortByDate).reverse(),
		},
	};
}
