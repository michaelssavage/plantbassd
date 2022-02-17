import Content from "components/SlugContent";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import CardWithButtons from "@/cards/CardWithButtons";
import styles from "@/pageStyle/slug.module.scss";

export default function FreshJuiceSlug({
	frontmatter: { title, date, pic, bandcamp, postLink },
	content,
}) {
	return (
		<>
			<Head>
				<title>Plant Bass'd Fresh Juice</title>
			</Head>
			<div className={styles.newsSection}>
				<div className="container">
					<div className="row">
						<Content content={content} date={date} title={title} />
						<CardWithButtons
							artist="Bandcamp"
							insta="Instagram"
							link={postLink}
							page={bandcamp}
							pic={pic}
							title={title}
						/>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
// eslint-disable-next-line func-style, require-await
export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts/fresh-juice")),
		paths = files.map((filename) => ({
			params: {
				slug: filename.replace(".md", ""),
			},
		}));

	return {
		fallback: false,
		paths,
	};
}
// eslint-disable-next-line func-style, require-await
export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
			path.join("posts/fresh-juice", `${slug}.md`),
			"utf-8"
		),
		{ data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			content,
			frontmatter,
		},
	};
}

FreshJuiceSlug.propTypes = {
	content: PropTypes.string.isRequired,
	frontmatter: PropTypes.instanceOf(Object).isRequired,
};

Content.propTypes = {
	content: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
