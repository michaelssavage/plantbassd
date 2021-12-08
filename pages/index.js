import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import Footer from "../components/Footer";
import Mixes from "../components/Mixes";
import News from "../components/News";
import Radio from "../components/Radio";
import Takeover from "../components/Takeover";
import { sortByDate } from "../utils";

export default function Home({ news, takeovers, radios }) {
	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/collage.jpg",
							amount: 0.3,
						},
					]}
					className="parallaxHeightChange"
				></ParallaxBanner>
			</ParallaxProvider>

			{/* TODO: Add autoplay video here
			<div className="videoContainer">
				<video autoPlay loop muted className="videoPlayer">
					<source src="/pbdjs.mp4" type="video/mp4" />
				</video>
			</div> */}

			<News news={news} />

			<Mixes />

			<div className="discoveryCards">
				<Takeover takeovers={takeovers} />
				<Radio radios={radios} />
			</div>

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	let news = getPosts("posts/news");
	news = news.sort(sortByDate).reverse().slice(0, 2);

	// get files from the takeover directory
	let takeovers = getPosts("posts/takeovers");
	takeovers = takeovers.sort(sortByDate);
	const numTakeovers = takeovers.length;
	takeovers = takeovers.slice(numTakeovers - 4, numTakeovers).reverse();

	let radios = getPosts("posts/radios");
	radios = radios.sort(sortByDate);
	const numRadios = radios.length;
	radios = radios.slice(numRadios - 4, numRadios).reverse();

	return {
		props: {
			news,
			takeovers,
			radios,
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
