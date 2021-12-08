import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import { useRouter } from "next/router";
import path from "path";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";

import styles from "../../styles/slug.module.scss";

export default function PostPage({
	frontmatter: { title, date, pic, artistPage, postLink },
	slug,
	content,
}) {
	const router = useRouter();

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
								<Row className={styles.buttons}>
									<Col className="text-center">
										<Button
											size="lg"
											className={styles.hoverLink}
											variant="outline-dark"
											onClick={() => router.back()}
										>
											Go Back
										</Button>
									</Col>
									<Col className="text-center">
										<Button
											size="lg"
											className={styles.hoverLink}
											variant="outline-dark"
											href={artistPage}
										>
											Artist's Insta
										</Button>
									</Col>
									<Col className="text-center">
										<Button
											size="lg"
											className={styles.hoverLink}
											variant="outline-dark"
											href={postLink}
										>
											Insta Post
										</Button>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<Footer />
			{/* <ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: pic,
							amount: -0.1,
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
							onClick={() => router.back()}
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
			</Container> */}
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
