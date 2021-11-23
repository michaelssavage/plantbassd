import React from "react";
import Navbar from "../components/Navbar";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import News from "../components/News";
import Mixes from "../components/Mixes";
import Takeover from "../components/Takeover";
import Radio from "../components/Radio";
import Footer from "../components/Footer";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils/sorter";

export default function Home({ news, takeovers, radios, icons }) {
	return (
		<>
			<Navbar />

			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/images/bluetrio.jpg",
							amount: 0.4,
						},
					]}
					className="parallaxHeightChange"
				></ParallaxBanner>
			</ParallaxProvider>

			<News news={news} />

			<Mixes />

			<Takeover takeovers={takeovers} />

			<Radio radios={radios} />

			<Footer icons={icons} />
		</>
	);
}

export async function getStaticProps() {
	let news = getPosts("posts/news");
	news = news.sort(sortByDate).reverse()[0];

	// get files from the takeover directory
	let takeovers = getPosts("posts/takeovers");
	takeovers = takeovers.sort(sortByDate);
	const numTakeovers = takeovers.length;
	takeovers = takeovers.slice(numTakeovers - 4, numTakeovers).reverse();

	let radios = getPosts("posts/radios");
	radios = radios.sort(sortByDate);
	const numRadios = radios.length;
	radios = radios.slice(numRadios - 4, numRadios).reverse();

	// icons svg src and the link associated with it.
	const iconsList = fs.readFileSync(
		path.join("posts/links/icons.md"),
		"utf-8"
	);
	const { data: iconMatter } = matter(iconsList);

	return {
		props: {
			news,
			takeovers,
			radios,
			icons: iconMatter.icons,
		},
	};
}

function getPosts(directory) {
	const files = fs.readdirSync(path.join(directory));

	//return Slug and frontmatter from takeover posts
	return files.map((filename) => {
		const slug = filename.replace(".md", "");

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join(directory, filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);
		return {
			slug,
			frontmatter,
		};
	});
}
