import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import Router from "next/router";
import path from "path";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import styles from "../../styles/slug.module.scss";

export default function PostPage({
	frontmatter: { title, date, pic, tracklist, artistPage, postLink },
	slug,
	content,
}) {
	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: pic,
							amount: 0.5,
						},
					]}
					className="parallaxHeightChange"
				></ParallaxBanner>
			</ParallaxProvider>

			<Container className={styles.card}>
				<Row>
					<h1 className={styles.postTitle}>{title}</h1>
					<div className={styles.postDate}>Posted on {date}</div>
					<div className={styles.postBody}>
						<div
							dangerouslySetInnerHTML={{
								__html: marked(content),
							}}
						></div>
						<div className={styles.imgWrapper}>
							<Image
								src={tracklist}
								width={600}
								height={600}
								alt="artist tracklist"
							/>
						</div>
					</div>
				</Row>

				<Row className="pt-5">
					<Col className="text-center">
						<Button
							size="lg"
							variant="outline-dark"
							onClick={() => Router.back()}
						>
							Go Back
						</Button>
					</Col>
					<Col className="text-center">
						<Button
							size="lg"
							variant="outline-dark"
							href={artistPage}
						>
							Artist's Page
						</Button>
					</Col>
					<Col className="text-center">
						<Button
							size="lg"
							variant="outline-dark"
							href={postLink}
						>
							Post Link
						</Button>
					</Col>
				</Row>
			</Container>
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
			slug,
			content,
		},
	};
}
