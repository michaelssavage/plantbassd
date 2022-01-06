import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import React from "react";
import { Col, Container } from "react-bootstrap";

import Footer from "../../components/Footer";
import { GoBack } from "../../components/Utilities";
import styles from "../../styles/slug.module.scss";

export default function PostPage({ frontmatter: { title }, content }) {
	return (
		<>
			<div className={styles.newsSection}>
				<Container>
					<Col className={styles.topTenContent}>
						<h1 className={styles.postTitle}>{title}</h1>
						<div className={styles.postBody}>
							<div
								dangerouslySetInnerHTML={{
									__html: marked(content),
								}}
							></div>
						</div>
					</Col>
				</Container>
			</div>

			<GoBack />

			<Footer />
		</>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts/top-ten-2021"));

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
		path.join("posts/top-ten-2021", slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			content,
		},
	};
}
