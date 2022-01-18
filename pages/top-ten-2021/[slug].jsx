import Footer from "components/Footer";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import PropTypes from "prop-types";
import React from "react";
import styles from "styles/slug.module.scss";

import GoBack from "@/btns/GoBack";

export default function TopTenSlug({ title, content }) {
	return (
		<>
			<div className={styles.newsSection}>
				<div className="container">
					<div className={`col ${styles.topTenContent}`}>
						<h1 className={styles.postTitle}>{title}</h1>
						<div className={styles.postBody}>
							<div
								dangerouslySetInnerHTML={{
									__html: marked(content),
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			<GoBack />

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
			title: frontmatter.title,
		},
	};
}

TopTenSlug.propTypes = {
	content: PropTypes.instanceOf(Object).isRequired,
	title: PropTypes.string.isRequired,
};
