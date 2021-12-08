import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { useRouter } from "next/router";
import Image from "next/image";
import path from "path";
import React from "react";
import Footer from "../../components/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "../../styles/slug.module.scss";

export default function PostPage({
	frontmatter: { title, date, pic, buyLink, postLink },
	slug,
	content,
}) {
	const router = useRouter();

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

							<Row>
								<Col>
									<Button
										size="lg"
										variant="outline-dark"
										onClick={() => router.back()}
									>
										Go Back
									</Button>
								</Col>
								<Col>
									<Button
										size="lg"
										variant="outline-dark"
										href={buyLink}
									>
										Buy Link
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
						</Col>
						<Col>
							<div className={styles.newsImage}>
								<Image
									src={pic}
									alt={title}
									width={500}
									height={500}
									layout="responsive"
								/>
							</div>
						</Col>
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
