import fs from "fs";
import matter from "gray-matter";
import Router from "next/router";
import path from "path";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import { CardNoText } from "../../components/Card";
import Footer from "../../components/Footer";
import { sortByDate } from "../../utils/Sorter";
import styles from "../../styles/page.module.scss";

export default function TakeoverPage({ takeovers }) {
	return (
		<>
			<div className={styles.takeoverDiver}>
				<Container>
					<h1 className={`globalHeader ${styles.header}`}>
						Plant Bass'd Takeovers
					</h1>

					<p className={styles.texter}>
						Nunc auctor urna tellus, a vulputate urna bibendum sed.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas dictum rhoncus lectus eget gravida.
					</p>
					<p className={styles.texter}>
						Nulla vel tortor vitae tortor aliquet ornare rhoncus sit
						amet felis. Etiam dui dui, mattis placerat nulla at,
						facilisis feugiat leo. Sed accumsan mattis diam in
						malesuada. Duis ex lacus, euismod a varius quis,
						faucibus a massa.
					</p>

					<Row className="g-5">
						{takeovers.map((artist) => (
							<CardNoText
								key={artist.frontmatter.title}
								post={artist}
								link={`takeovers/${artist.slug}`}
							/>
						))}
					</Row>

					<div className="globalBottomBtn">
						<Button
							size="lg"
							variant="outline-light"
							onClick={() => Router.back()}
						>
							Go Back
						</Button>
					</div>
				</Container>
			</div>

			<Footer />
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
			takeovers: takeovers.sort(sortByDate).reverse(),
		},
	};
}
