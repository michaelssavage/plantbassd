import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Button, Col, Container, Row } from "react-bootstrap";
import Router from "next/router";

import styles from "../slug.module.scss";

import Navbar from "../../components/Navbar/Navbar.js";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function PostPage({
	frontmatter: { title, date, pic, artistPage, postLink },
	slug,
	content,
}) {
	return (
		<>
			<Navbar />

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
				<h1 className={styles.postTitle}>{title}</h1>
				<div className={styles.postDate}>Posted on {date}</div>
				<div className={styles.postBody}>
					<div
						dangerouslySetInnerHTML={{ __html: marked(content) }}
					></div>
				</div>

				<Row className="pt-5">
					<Col className="text-center">
						<Button
							size="lg"
							variant="outline-dark"
							onClick={() => Router.back()}
							className={styles.hoverLink}
						>
							Go Back
						</Button>
					</Col>
					<Col className="text-center">
						<Button
							size="lg"
							variant="outline-dark"
							href={artistPage}
							className={styles.hoverLink}
						>
							Artist's Page
						</Button>
					</Col>
					<Col className="text-center">
						<Button
							size="lg"
							variant="outline-dark"
							href={postLink}
							className={styles.hoverLink}
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
	const files = fs.readdirSync(path.join("posts/takeovers"));

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
		path.join("posts/takeovers", slug + ".md"),
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
