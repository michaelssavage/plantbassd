import { GoBack, SoundcloudButton } from "components/Btns";
import { CardExternal } from "components/Card";
import Footer from "components/Footer";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "styles/page.module.scss";

export default function MixesPage({ mixes }) {
	const clubMixes = mixes.slice(0, 4);
	const downMixes = mixes.slice(4, 8);
	const otherMixes = mixes.slice(8, 12);
	return (
		<>
			<div className={styles.mixBG}>
				<Container>
					<h1 className={styles.bHeader}>Plant Bass'd Mixes</h1>

					<p className={styles.bTexter}>
						Check out some mixes we've put together for ITSNOTRADIO,
						Set Radio, and some guest mixes:
					</p>

					<p className={styles.bTexter}>
						<SoundcloudButton
							style={styles.soundcloud}
							link="https://soundcloud.com/plantbassddjs/sets/club-mixes"
							title="Club Ready Mixes"
						/>
					</p>

					<Row className="g-3 pb-4">
						{clubMixes.map((card) => (
							<CardExternal key={card.key} card={card} />
						))}
					</Row>
					<p className={styles.bTexter}>
						<SoundcloudButton
							style={styles.soundcloud}
							link="https://soundcloud.com/plantbassddjs/sets/dance-mixes"
							title="Downtempo Mixes"
						/>
					</p>

					<Row className="g-3 pb-4">
						{downMixes.map((card) => (
							<CardExternal key={card.key} card={card} />
						))}
					</Row>
					<p className={styles.bTexter}>
						<SoundcloudButton
							style={styles.soundcloud}
							link="https://soundcloud.com/plantbassddjs/tracks"
							title="More Mixes"
						/>
					</p>

					<Row className="g-3">
						{otherMixes.map((card) => (
							<CardExternal key={card.key} card={card} />
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
