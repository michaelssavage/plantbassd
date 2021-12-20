import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { Container } from "react-bootstrap";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import Footer from "../../components/Footer";
import { GoBack } from "../../components/Utilities";
import styles from "../../styles/page.module.scss";

export default function TopTen({ topTenReleases }) {
	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					className="parallaxHeightChange"
					layers={[
						{
							image: "/top-ten-2021/collage.jpg",
							amount: 0.8,
						},
					]}
				></ParallaxBanner>
			</ParallaxProvider>
			<div className={styles.topTenBG}>
				<Container>
					<h1 className={`globalHeader ${styles.bHeader}`}>
						Top 10 Dance Releases
					</h1>

					<p className={styles.bTexter}>
						Oisin, Michael, and Peter choose their favourite Albums,
						EPs, LPs, and tracks released in 2021.
					</p>

					<h1 className="p-5 text-center">Under Construction</h1>

					<GoBack />
				</Container>
			</div>

			<Footer />
		</>
	);
}
export async function getStaticProps() {
	const files = fs.readdirSync(path.join("posts/top-ten-2021"));

	const topTenReleases = files.map((filename) => {
		const slug = filename.replace(".md", "");

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts/top-ten-2021", filename),
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
			topTenReleases,
		},
	};
}
