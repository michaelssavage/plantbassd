import Footer from "components/Footer";
import Mixes from "components/Mixes";
import News from "components/News";
import Radio from "components/Radio";
import RellaxImg from "components/RellaxImg";
import Takeover from "components/Takeover";
import { sortByDate } from "components/Utilities";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from "react";

export default function Home({ news, takeovers, radios }) {
	return (
		<>
			<RellaxImg main={true} img="/various/bg.jpg" />

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
	news = news.sort(sortByDate).reverse().slice(0, 6);

	// get files from the takeover directory
	let takeovers = getPosts("posts/takeovers");
	takeovers = takeovers.sort(sortByDate).reverse().slice(0, 4);

	let radios = getPosts("posts/radios");
	radios = radios.sort(sortByDate).reverse().slice(0, 4);

	return {
		props: {
			news,
			takeovers,
			radios,
		},
	};
}

const getPosts = (directory) => {
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
};
