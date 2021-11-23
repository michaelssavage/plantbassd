import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Container, Row } from "react-bootstrap";
import { CardNoText } from "../../components/Card";
import Router from "next/router";
import styles from "../page.module.scss";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils/sorter";

export default function TakeoverPage({ takeovers, icons }) {
	return (
		<>
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
							<CardNoText
								post={artist}
								link={`takeovers/${artist.slug}`}
							/>
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
