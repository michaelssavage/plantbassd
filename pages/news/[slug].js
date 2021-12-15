import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { CardWithButtons } from "../../components/Card";
import Footer from "../../components/Footer";
import styles from "../../styles/slug.module.scss";

export default function PostPage({
	frontmatter: { title, date, pic, bandcamp, tickets, postLink },
	content,
}) {
	let buyLink;
	let buyText;
	if (bandcamp) {
		buyLink = bandcamp;
		buyText = "Bandcamp";
	} else if (tickets) {
		buyLink = tickets;
		buyText = "RA tickets";
	}

	return (
		<>
			<div className={styles.newsSection}>
				<Container>
					<Row>
						<Col
							className={styles.postContent}
							md={12}
							lg={6}
							xl={6}
						>
							<p className={styles.postDate}>Posted on {date}</p>
							<h1 className={styles.postTitle}>{title}</h1>
							<div className={styles.postBody}>
								<div
									dangerouslySetInnerHTML={{
										__html: marked(content),
									}}
								></div>
							</div>
						</Col>

						<CardWithButtons
							pic={pic}
							title={title}
							page={buyLink}
							artist={buyText}
							link={postLink}
							insta="Insta Post"
						/>
					</Row>
				</Container>
			</div>

			<Footer />
		</>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts/news"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join("posts/news", slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}
