import { CardWithButtons } from "components/Card";
import Footer from "components/Footer";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import path from "path";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "styles/slug.module.scss";

export default function PostPage({
	frontmatter: { title, date, pic, tracklist, artistPage, mixLink },
	content,
}) {
	return (
		<>
			<div className={styles.newsSection}>
				<Container className={styles.card}>
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
							<div className={styles.imgWrapper}>
								<Image
									src={tracklist}
									width={600}
									height={600}
									alt="artist tracklist"
								/>
							</div>
						</Col>

						<CardWithButtons
							pic={pic}
							title={title}
							artist="Artist's Insta"
							page={artistPage}
							insta="Listen Now"
							link={mixLink}
						/>
					</Row>
				</Container>
			</div>

			<Footer />
		</>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts/radios"));

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
		path.join("posts/radios", slug + ".md"),
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
