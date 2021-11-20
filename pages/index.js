import Head from "next/head";
import Navbar from "../components/Navbar/Navbar.js";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import Mixes from "../components/Mixes/Mixes.js";
import Takeover from "../components/Takeover/Takeover.js";
import Radio from "../components/Radio/Radio.js";
import Footer from "../components/Footer/Footer.js";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";

export default function Home({ takeovers, radios, icons }) {
	return (
		<>
			<Head>
				<title>Plant Bass'd</title>
				<meta name="Plant Bass'd DJs blog" content="Plant Bass'd" />
				<link rel="icon" href="/pb_favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<Navbar />

			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/images/hoodie.jpg",
							amount: 0.4,
						},
					]}
					style={{ height: "100vh" }}
				></ParallaxBanner>
			</ParallaxProvider>

			<Mixes />

			<Takeover takeovers={takeovers} />

			<Radio radios={radios} />

			<Footer icons={icons} />
		</>
	);
}

export async function getStaticProps() {
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
