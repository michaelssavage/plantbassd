import Footer from "components/Footer";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import path from "path";
import PropTypes from "prop-types";

import CardWithButtons from "@/cards/CardWithButtons";
import styles from "@/pageStyle/slug.module.scss";

function Content({ date, title, content }) {
	return (
		<>
			<Head>
				<title>Plant Bass'd News</title>
			</Head>
			<div
				className={`
				${styles.postContent}
				col-lg-6
				col-md-12
				col-xl-6 
				`}
			>
				<p className={styles.postDate}>Posted on {date}</p>
				<h1 className={styles.postTitle}>{title}</h1>
				<div className={styles.postBody}>
					<div
						dangerouslySetInnerHTML={{
							__html: marked(content),
						}}
					/>
				</div>
			</div>
		</>
	);
}

export default function NewsSlug({
	frontmatter: { title, date, pic, bandcamp, tickets, seeMore, postLink },
	content,
}) {
	let buyLink = seeMore,
		buyText = "See More";
	if (bandcamp) {
		buyLink = bandcamp;
		buyText = "Bandcamp";
	} else if (tickets) {
		buyLink = tickets;
		buyText = "RA tickets";
	}

	return (
		<>
			<div className={styles.newsSection}>
				<div className="container">
					<div className="row">
						<Content content={content} date={date} title={title} />
						<CardWithButtons
							artist={buyText}
							insta="Insta Post"
							link={postLink}
							page={buyLink}
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
	const files = fs.readdirSync(path.join("posts/news")),
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
			path.join("posts/news", `${slug}.md`),
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

NewsSlug.propTypes = {
	content: PropTypes.string.isRequired,
	frontmatter: PropTypes.instanceOf(Object).isRequired,
};

Content.propTypes = {
	content: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
