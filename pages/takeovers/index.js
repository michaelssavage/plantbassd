import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaSpotify } from "react-icons/fa";

import Footer from "../../components/Footer";
import { Content, GoBack, sortByDate } from "../../components/Utilities";
import styles from "../../styles/page.module.scss";

export default function TakeoverPage({ takeovers }) {
	return (
		<>
			<div className={styles.takeoverBG}>
				<Container>
					<Content
						title="Plant Bass'd Takeovers"
						description="We ask artists to select and share their top tracks.
						Check out the playlist here:"
						button={
							<Button
								href="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
								variant="dark"
								className={`text-nowrap ${styles.spotify}`}
							>
								<FaSpotify /> Plant Bass'd Picks
							</Button>
						}
						cards={takeovers}
						route="takeovers"
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
