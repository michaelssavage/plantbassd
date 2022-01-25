import Error from "components/Error";
import Footer from "components/Footer";
import SearchBox from "components/SearchBox";
import { sortByDate } from "components/Utilities";
import fs from "fs";
import matter from "gray-matter";
import useFilter from "hooks/useFilter";
import path from "path";
import PropTypes from "prop-types";
import React from "react";
import styles from "styles/page.module.scss";

import GoBack from "@/btns/GoBack";
import SpotifyButton from "@/btns/SpotifyButton";
import CardNoText from "@/cards/CardNoText";

export default function TakeoverPage({ takeovers }) {
	const { hasErrored, error, takeoverCards, filter, setFilter } =
			useFilter(takeovers),
		handleSearchChange = (event) => {
			setFilter(event.target.value);
		};

	if (hasErrored) {
		return <Error error={error} />;
	}
	return (
		<>
			<div className={styles.takeoverBG}>
				<div className="container">
					<h1 className={styles.bHeader}>Plant Bass'd Takeovers</h1>

					<p className={styles.bTexter}>
						We ask artists to select and share their top tracks.
						Check out the playlist here:
					</p>
					<div className={styles.searchBox}>
						<SearchBox
							filter={filter}
							setFilter={handleSearchChange}
							styling={styles.searchFilter}
						/>
						<SpotifyButton
							link="https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=c5affedbcbc74e76"
							styling={styles.spotify}
							title="Plant Bass'd Picks"
						/>
					</div>
					<div className="row g-3">
						{takeoverCards.map((takeover) => (
							<CardNoText
								key={takeover.frontmatter.title}
								link={`/takeovers/${takeover.slug}`}
								post={takeover}
							/>
						))}
					</div>

					<GoBack />
				</div>
			</div>

			<Footer />
		</>
	);
}

// eslint-disable-next-line func-style, require-await
export async function getStaticProps() {
	const files = fs.readdirSync(path.join("posts/takeovers")),
		takeovers = files.map((filename) => {
			const markdownWithMeta = fs.readFileSync(
					path.join("posts/takeovers", filename),
					"utf-8"
				),
				{ data: frontmatter } = matter(markdownWithMeta),
				slug = filename.replace(".md", "");
			return {
				frontmatter,
				slug,
			};
		});

	return {
		props: {
			takeovers: takeovers.sort(sortByDate).reverse(),
		},
	};
}

TakeoverPage.propTypes = {
	takeovers: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
