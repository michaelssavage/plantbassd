import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaSoundcloud } from "react-icons/fa";

import Footer from "../../components/Footer";
import styles from "../../styles/page.module.scss";
import { Content, GoBack, sortByDate } from "../../utils";

export default function RadioPage({ radios }) {
	return (
		<>
			<div className={styles.radioBG}>
				<Container>
					<Content
						title="Plant Bass'd Radio"
						description="Guest mixes from homegrown and international artists.
						Check out the Plant Bass'd radio shows here:"
						button={
							<Button
								href="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
								variant="dark"
								className={`text-nowrap ${styles.soundcloud}`}
							>
								<FaSoundcloud /> Plant Bass'd Radio
							</Button>
						}
						cards={radios}
						route="radios"
					/>

					<GoBack />
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
			radios: radios.sort(sortByDate).reverse(),
		},
	};
}
