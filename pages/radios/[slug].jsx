import Footer from "components/Footer";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import path from "path";
import PropTypes from "prop-types";
import React from "react";
import styles from "styles/slug.module.scss";

import CardWithButtons from "@/cards/CardWithButtons";

export default function RadioSlug({
	frontmatter: { title, date, pic, tracklist, artistPage, mixLink },
	content,
}) {
	return (
		<>
			<div className={styles.newsSection}>
				<div className="container">
					<div className="row">
						<div
							className={`${styles.postContent}
							col-lg-6
							col-md-12
							col-xl-6`}
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
							<div className={styles.imgWrapper}>
								<Image
									alt="artist tracklist"
									height={600}
									src={tracklist}
									width={600}
								/>
							</div>
						</div>

						<CardWithButtons
							artist="Artist's Insta"
							insta="Listen Now"
							link={mixLink}
							page={artistPage}
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
	const files = fs.readdirSync(path.join("posts/radios")),
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
			path.join("posts/radios", `${slug}.md`),
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

RadioSlug.propTypes = {
	content: PropTypes.string.isRequired,
	frontmatter: PropTypes.instanceOf(Object).isRequired,
};
