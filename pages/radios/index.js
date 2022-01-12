import { CardNoText } from "components/Card";
import Footer from "components/Footer";
import { GoBack, sortByDate, SoundcloudButton } from "components/Utilities";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "styles/page.module.scss";

export default function RadioPage({ radios }) {
	return (
		<>
			<div className={styles.radioBG}>
				<Container>
					<h1 className={`globalHeader ${styles.bHeader}`}>
						Plant Bass'd Radio
					</h1>

					<p className={styles.bTexter}>
						Guest mixes from homegrown and international artists.
						Check them out here:
					</p>
					<p className={styles.bTexter}>
						<SoundcloudButton
							style={styles.soundcloud}
							link="https://soundcloud.com/plantbassddjs/sets/plant-bassd-radio"
							title="Plant Bass'd Radio"
						/>
					</p>
					<Row className="g-3">
						{radios.map((radio) => (
							<CardNoText
								key={radio.frontmatter.title}
								post={radio}
								link={`/radios/${radio.slug}`}
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
