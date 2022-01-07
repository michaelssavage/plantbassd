import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { Container, Row } from "react-bootstrap";

import { CardNoText } from "components/Card";
import Footer from "components/Footer";
import { GoBack, sortByDate, SpotifyButton } from "components/Utilities";
import styles from "styles/page.module.scss";

export default function TakeoverPage({ takeovers }) {
	return (
		<>
			<div className={styles.takeoverBG}>
				<Container>
					<h1 className={`globalHeader ${styles.bHeader}`}>
						Plant Bass'd Takeovers
					</h1>

					<p className={styles.bTexter}>
						We ask artists to select and share their top tracks.
						Check out the playlist here:
					</p>
					<p className={styles.bTexter}>
						<SpotifyButton
							link="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
							title="Plant Bass'd Picks"
						/>
					</p>
					<Row className="g-3">
						{takeovers.map((takeover) => (
							<CardNoText
								key={takeover.frontmatter.title}
								post={takeover}
								link={`/takeovers/${takeover.slug}`}
							/>
						))}
					</Row>

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
