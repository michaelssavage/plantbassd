import Footer from "components/Footer";
import { sortByDate } from "components/Utilities";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import PropTypes from "prop-types";
import styles from "styles/page.module.scss";

import GoBack from "@/btns/GoBack";
import SoundcloudButton from "@/btns/SoundcloudButton";
import CardNoText from "@/cards/CardNoText";

export default function RadioPage({ radios }) {
	return (
		<>
			<Head>
				<title>Plant Bass'd Radios</title>
			</Head>
			<div className={styles.radioBG}>
				<div className="container">
					<h1 className={styles.bHeader}>Plant Bass'd Radio</h1>

					<p className={styles.bTexter}>
						{`Guest mixes from homegrown and international artists.
						Check them out here:`}
					</p>
					<p className={styles.bTexter}>
						<SoundcloudButton
							link="https://soundcloud.com/plantbassddjs/sets/plant-bassd-radio"
							styling={styles.soundcloud}
							title="Plant Bass'd Radio"
						/>
					</p>
					<div className="row g-3">
						{radios.map((radio) => (
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
