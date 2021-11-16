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

export default function RadioPage({ radios }) {
	const artists = radios.reverse();
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
			<div className={styles.radioColor}>
				<Container>
					<h1 className={styles.radioHeader}>Plant Bass'd Radio</h1>

					{/* <div className="radioText radioGrid"> */}

					<p className={`${styles.radioText} ${styles.radioGrid}`}>
						Check out some guest mixes selected for the Plant Bass'd
						Radio.
					</p>

					<Row className={`${styles.radioGrid} g-3`}>
						{artists.map((artist, index) => (
							<Col key={index} xl={6} lg={6} md={6} xs={12}>
								<Link
									href={`takeovers/${artist.slug}`}
									passHref
								>
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
	const files = fs.readdirSync(path.join("posts/radios"));

	//get Slug and frontmatter from posts
	const radios = files.map((filename) => {
		const slug = filename.replace(".md", "");

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts/radios", filename),
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
			radios: radios.sort(sortByDate),
		},
	};
}
