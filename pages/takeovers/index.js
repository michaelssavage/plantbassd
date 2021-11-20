import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import styles from "../page.module.scss";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";

export default function TakeoverPage({ takeovers, icons }) {
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
			<div className={styles.takeoverDiver}>
				<Container>
					<h1 className={`globalHeader ${styles.header}`}>
						Plant Bass'd Takeovers
					</h1>

					<p className={styles.texter}>
						In 2020, we invited upcoming artists, friends, and
						exciting talents to share their top 10 tunes that they
						wanted to play once they returned to the clubs.
					</p>

					<Row className="g-5">
						{takeovers.map((artist) => (
							<Col key={artist.frontmatter.name} lg={3} xs={6}>
								<Link
									href={`takeovers/${artist.slug}`}
									passHref
								>
									<Card className="globalCardStyle">
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

					<Row className={styles.buttonStyler}>
						<Button
							size="lg"
							variant="outline-light"
							onClick={() => Router.back()}
						>
							Go Back
						</Button>
					</Row>
				</Container>
			</div>

			<Footer icons={icons} />
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

	// icons svg src and the link associated with it.
	const iconsList = fs.readFileSync(
		path.join("posts/links/icons.md"),
		"utf-8"
	);
	const { data: iconMatter } = matter(iconsList);

	return {
		props: {
			takeovers: takeovers.sort(sortByDate).reverse(),
			icons: iconMatter.icons,
		},
	};
}
