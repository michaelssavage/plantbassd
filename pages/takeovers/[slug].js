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
			<Navbar dark={true} />

			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: pic,
							amount: 0.6,
						},
					]}
					style={{ height: "100vh" }}
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
						<svg
							width="40"
							height="30"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M7 16l-4-4m0 0l4-4m-4 4h18"
							></path>
						</svg>
						<Button
							href="/"
							size="lg"
							variant="outline-dark"
							onClick={() => Router.push("/")}
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
