import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import React from "react";
import { Container, Row } from "react-bootstrap";

import { CardExternal } from "../../components/Card";
import Footer from "../../components/Footer";
import { GoBack } from "../../components/Utilities";
import styles from "../../styles/page.module.scss";

export default function MixesPage({ mixes }) {
	const clubMixes = mixes.slice(0, 4);
	const downMixes = mixes.slice(4, 8);
	const otherMixes = mixes.slice(8, 12);
	return (
		<>
			<div className={styles.mixBG}>
				<Container>
					<h1 className={styles.bHeader}>Plant Bass'd Mixes</h1>

					<Link href="https://soundcloud.com/plantbassddjs/sets/club-mixes">
						<a className="anchor">
							<h3
								name="news"
								className={`header ${styles.mobileHead}`}
							>
								Club Ready Mixes
							</h3>
						</a>
					</Link>

					<Row className="g-3 pb-4">
						{clubMixes.map((card) => (
							<CardExternal key={card.key} card={card} />
						))}
					</Row>
					<Link href="https://soundcloud.com/plantbassddjs/sets/dance-mixes">
						<a className="anchor">
							<h3
								name="news"
								className={`header ${styles.mobileHead}`}
							>
								Downtempo Mixes
							</h3>
						</a>
					</Link>

					<Row className="g-3 pb-4">
						{downMixes.map((card) => (
							<CardExternal key={card.key} card={card} />
						))}
					</Row>

					<Link href="https://soundcloud.com/plantbassddjs/tracks">
						<a className="anchor">
							<h3
								name="news"
								className={`header ${styles.mobileHead}`}
							>
								More Mixes
							</h3>
						</a>
					</Link>

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
