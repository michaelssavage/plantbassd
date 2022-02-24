import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import SearchBox from "components/SearchBox";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import useFilter from "hooks/useFilter";

import CardNoText from "@/cards/CardNoText";
import GoBack from "@/btns/GoBack";
import SocialMediaBtn from "@/btns/SocialMediaBtn";
import styles from "@/pageStyle/page.module.scss";

export default function RadioPage({ radios }) {
	const { hasErrored, error, postCards, filter, setFilter } =
			useFilter(radios),
		handleSearchChange = (event) => {
			setFilter(event.target.value);
		};

	if (hasErrored) {
		return <Error error={error} />;
	}
	return (
		<>
			<Head>
				<title>Plant Bass'd Radios</title>
			</Head>
			<div className={styles.radioBG}>
				<div className="container">
					<h1 className={styles.pageHeader}>Plant Bass'd Radio</h1>

					<p className={styles.pageText}>
						Guest mixes from homegrown and international artists.
						Check them out on our Soundcloud.
					</p>
					<div className={styles.searchBox}>
						<SearchBox
							filter={filter}
							setFilter={handleSearchChange}
							styling={styles.searchFilter}
						/>
						<SocialMediaBtn
							icon="radio"
							link="https://soundcloud.com/plantbassddjs/sets/plant-bassd-radio"
							styling={styles.soundcloud}
							title="Plant Bass'd Radio"
						/>
					</div>
					<div className="row g-3">
						{postCards.map((radio) => (
							<CardNoText
								key={radio.frontmatter.title}
								link={`/radios/${radio.slug}`}
								post={radio}
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
	// Get files from the takeover directory
	const files = fs.readdirSync(path.join("posts/radios")),
		// Get Slug and frontmatter from posts
		radios = files.map((filename) => {
			const markdownWithMeta = fs.readFileSync(
					path.join("posts/radios", filename),
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
			radios: radios.sort(sortByDate).reverse(),
		},
	};
}

RadioPage.propTypes = {
	radios: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
