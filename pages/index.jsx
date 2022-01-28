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
import PropTypes from "prop-types";

export default function Home({ news, takeovers, radios }) {
	return (
		<>
			<RellaxImg img="/various/bg.jpg" main />

			<News news={news} />

			<Mixes />

			<section className="discoveryCards">
				<Takeover takeovers={takeovers} />
				<Radio radios={radios} />
			</section>

			<Footer />
		</>
	);
}

const getPosts = (directory) => {
	const files = fs.readdirSync(path.join(directory));

	// Return Slug and frontmatter from takeover posts
	return files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
				path.join(directory, filename),
				"utf-8"
			),
			{ data: frontmatter } = matter(markdownWithMeta),
			slug = filename.replace(".md", "");

		return {
			frontmatter,
			slug,
		};
	});
};

// eslint-disable-next-line func-style, require-await
export async function getStaticProps() {
	const news = getPosts("posts/news").sort(sortByDate).reverse().slice(0, 6),
		radios = getPosts("posts/radios")
			.sort(sortByDate)
			.reverse()
			.slice(0, 4),
		// Get files from the takeover directory
		takeovers = getPosts("posts/takeovers")
			.sort(sortByDate)
			.reverse()
			.slice(0, 4);

	return {
		props: {
			news,
			radios,
			takeovers,
		},
	};
}

Home.propTypes = {
	news: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
	radios: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
	takeovers: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
