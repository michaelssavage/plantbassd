import "react-placeholder/lib/reactPlaceholder.css";

import { CardNoText } from "components/Card";
import Footer from "components/Footer";
import SearchBox from "components/SearchBox";
import { GoBack, sortByDate, SpotifyButton } from "components/Utilities";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ReactPlaceholder from "react-placeholder";
import styles from "styles/page.module.scss";

export default function TakeoverPage({ takeovers }) {
	const [takeoverCards, setTakeoverCards] = useState([]);
	const [filter, setFilter] = useState("");
	const [hasErrored, setHasErrored] = useState(false);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		async function delayFunc() {
			try {
				if (!filter) {
					await delay(1600);
					setIsLoading(false);
					setTakeoverCards(takeovers);
				} else {
					setIsLoading(false);
					setTakeoverCards(
						takeovers.filter((takeover) =>
							takeover.frontmatter.title.includes(filter)
						)
					);
				}
			} catch (e) {
				setIsLoading(false);
				setHasErrored(true);
				setError(e);
			}
		}
		delayFunc();
	}, [filter, takeovers]);

	if (hasErrored === true) {
		return (
			<div className="text-danger">
				Error: <b> loading Data failed {error}</b>
			</div>
		);
	}

	return (
		<>
			<div className={styles.takeoverBG}>
				<Container>
					<h1 className={styles.bHeader}>Plant Bass'd Takeovers</h1>

					<p className={styles.bTexter}>
						We ask artists to select and share their top tracks.
						Check out the playlist here:
					</p>
					<p className={styles.searchBox}>
						<SearchBox
							style={styles.searchFilter}
							filter={filter}
							setFilter={setFilter}
						/>
						<SpotifyButton
							style={styles.spotify}
							link="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
							title="Plant Bass'd Picks"
						/>
					</p>
					<ReactPlaceholder
						type="media"
						rows={15}
						ready={isLoading === false}
					>
						<Row className="g-3">
							{takeoverCards.map((takeover) => (
								<CardNoText
									key={takeover.frontmatter.title}
									post={takeover}
									link={`/takeovers/${takeover.slug}`}
								/>
							))}
						</Row>
					</ReactPlaceholder>

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
