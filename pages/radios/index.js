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

export default function RadioPage({ radios }) {
	const artists = radios.reverse();
	return (
		<>
			<div className={styles.radioDiver}>
				<Container>
					<h1 className={`globalHeader ${styles.header}`}>
						Plant Bass'd Radio
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
						{artists.map((artist) => (
							<CardNoText
								key={artist.frontmatter.title}
								post={artist}
								link={`radios/${artist.slug}`}
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
