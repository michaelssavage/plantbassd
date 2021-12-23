import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { RiSoundcloudLine } from "react-icons/ri";

import { CardExternal } from "../../components/Card";
import Footer from "../../components/Footer";
import { GoBack } from "../../components/Utilities";
import styles from "../../styles/page.module.scss";

const SoundcloudButton = ({ link }) => {
	return (
		<p className={styles.texter}>
			<a
				role="button"
				className={`${styles.soundcloud} text-nowrap btn btn-dark btn-lg`}
				href={link}
				rel="noopener noreferrer"
				target="_blank"
			>
				<RiSoundcloudLine /> Soundcloud
			</a>
		</p>
	);
};

export default function MixesPage({ mixes }) {
	const clubMixes = mixes.slice(0, 4);
	const downMixes = mixes.slice(4, 8);
	return (
		<>
			<div className={styles.divBackground}>
				<Container>
					<h1 className={styles.bHeader}>Plant Bass'd Mixes</h1>

					<h3 name="news" className={`header ${styles.mobileHead}`}>
						Downtempo Mixes
					</h3>

					<Row className="g-3">
						{clubMixes.map((card) => (
							<CardExternal key={card.key} card={card} />
						))}
					</Row>

					<SoundcloudButton link="https://soundcloud.com/plantbassddjs/sets/dance-mixes" />

					<h3 name="news" className={`header ${styles.mobileHead}`}>
						Club Ready Mixes
					</h3>

					<Row className="g-3">
						{downMixes.map((card) => (
							<CardExternal key={card.key} card={card} />
						))}
					</Row>

					<SoundcloudButton link="https://soundcloud.com/plantbassddjs/sets/club-mixes" />

					<GoBack />
				</Container>
			</div>

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	// linktree data and the links.
	const markdownWithMeta = fs.readFileSync(
		path.join("posts/utils/mixes.md"),
		"utf-8"
	);
	const { data: frontmatter } = matter(markdownWithMeta);

	return {
		props: {
			mixes: frontmatter.mixes,
		},
	};
}
