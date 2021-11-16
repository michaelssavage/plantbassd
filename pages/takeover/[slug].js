import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Button, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

import styles from "./slug.module.scss";

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
					style={{ height: "80vh" }}
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

				<Row>
					<Col>
						<Button size="lg" variant="outline-dark">
							<Link href="/">Go Back</Link>
						</Button>
					</Col>
					<Col>
						<Button
							size="lg"
							variant="outline-dark"
							href={artistPage}
						>
							Artist's Page
						</Button>
					</Col>
					<Col>
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
	const files = fs.readdirSync(path.join("posts"));

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
		path.join("posts", slug + ".md"),
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
