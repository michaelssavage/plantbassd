import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar.js";
import { Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "./page.module.scss";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";

export default function TakeoverPage({ takeovers }) {
	const artists = takeovers.reverse();
	return (
		<>
			<Head>
				<title>Plant Bass'd</title>
				<meta name="Plant Bass'd DJs blog" content="Plant Bass'd" />
				<link rel="icon" href="/pb_favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<Navbar />
			<div className={styles.toDiv}>
				<Container>
					<h1 className={styles.toHeader}>Plant Bass'd Takeovers</h1>

					<p className={styles.toText}>
						In 2020, we invited upcoming artists, friends, and
						exciting talents to share their top 10 tunes that they
						wanted to play once they returned to the clubs.
					</p>

					<Row className={`g-5 ${styles.toGrid}`}>
						{artists.map((artist, index) => (
							<Col key={index} xl={4} lg={6} md={6} xs={12}>
								<Link href={`takeovers/${artist.slug}`}>
									<Card className={styles.cardStyle}>
										<Card.Img
											variant="top"
											src={artist.frontmatter.pic}
											alt={artist.frontmatter.name}
										/>
									</Card>
								</Link>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</>
	);
}

export async function getStaticProps() {
	// get files from the takeover directory
	const files = fs.readdirSync(path.join("posts/takeovers"));

	//get Slug and frontmatter from posts
	const takeovers = files.map((filename) => {
		const slug = filename.replace(".md", "");

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts/takeovers", filename),
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
			takeovers: takeovers.sort(sortByDate),
		},
	};
}
