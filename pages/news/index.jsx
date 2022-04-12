import { AiOutlineCloseCircle } from "react-icons/ai";
import { sortByDate } from "components/Utilities";
import Error from "components/Error";
import Footer from "components/Footer";
import Head from "next/head";
import PropTypes from "prop-types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import useNewsFilter from "hooks/useNewsFilter";

import CardWithText from "@/cards/CardWithText";
import GoBack from "@/btns/GoBack";
import styles from "@/pageStyle/page.module.scss";

function FilterTags({ tagList, handleTags }) {
	return (
		<>
			<Head>
				<title>Plant Bass'd News</title>
			</Head>
			<div className={styles.btnGroup} role="group">
				<div>Filters:</div>

				{tagList &&
					tagList.map((tag) => (
						<button
							className={`btn btn-outline-dark ${
								tag.value ? "active" : ""
							}`}
							key={tag.name}
							onClick={() => handleTags(tag)}
							type="button"
						>
							{tag.name}{" "}
							{tag.value ? <AiOutlineCloseCircle /> : null}
						</button>
					))}
			</div>
		</>
	);
}

export default function NewsPage({ files }) {
	const { hasErrored, error, newsStories, tagList, handleTags } =
		useNewsFilter(files);

	if (hasErrored) {
		<Error error={error} />;
	}

	return (
		<>
			<div className={styles.newsBG}>
				<div className="container">
					<h1 className={styles.pageHeader}>Plant Bass'd News</h1>

					<p className={styles.pageText}>
						News about club guides, gigs, and all things Plant
						Bass'd. Keep up to date on our Instagram,{" "}
						<a
							className="blackAnchor"
							href="http://instagram.com/plantbassd___"
						>
							@plantbassd___
						</a>
					</p>

					<FilterTags handleTags={handleTags} tagList={tagList} />

					<div className="row g-3">
						{newsStories.map((story) => (
							<CardWithText
								key={story.frontmatter.title}
								link={`/${story.frontmatter.path}/${story.slug}`}
								post={story}
							/>
						))}
					</div>

					<GoBack />
				</div>
			</div>

			<Footer />
		</>
	);
}

/* eslint-disable */
export async function getStaticProps() {
	const getAllPosts = (dirPath, posts) => {
		const allPosts = posts || [],
			folders = fs.readdirSync(dirPath);

		folders.forEach((file) => {
			if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
				// If this is a directory, then recursively call function
				getAllPosts(`${dirPath}/${file}`, allPosts);
			} else {
				const markdownWithMeta = fs.readFileSync(
						path.join(dirPath, file),
						"utf-8"
					),
					{ data: frontmatter } = matter(markdownWithMeta),
					slug = file.replace(".md", "");

				allPosts.push({
					frontmatter,
					slug,
				});
			}
		});
		return allPosts;
	};

	const files = getAllPosts("posts").sort(sortByDate).reverse();

	return {
		props: {
			files,
		},
	};
}
/* eslint-enable */
NewsPage.propTypes = {
	files: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

FilterTags.propTypes = {
	handleTags: PropTypes.func.isRequired,
	tagList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			value: PropTypes.bool.isRequired,
		})
	).isRequired,
};
