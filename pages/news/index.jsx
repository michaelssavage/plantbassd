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

export default function NewsPage({ news }) {
	const { hasErrored, error, newsStories, tagList, handleTags } =
		useNewsFilter(news);

	if (hasErrored) {
		<Error error={error} />;
	}

	return (
		<>
			<div className={styles.newsBG}>
				<div className="container">
					<h1 className={styles.pageHeader}>Plant Bass'd News</h1>

					<p className={styles.pageText}>
						{`News about club guides, Gigs, and all things Plant
						Bass'd. Keep up to date on our Instagram, `}
						<a
							className="blackAnchor"
							href="http://instagra.com/plantbassddjs"
						>
							@plantbassddjs.
						</a>
					</p>

					<FilterTags handleTags={handleTags} tagList={tagList} />

					<div className="row g-3">
						{newsStories.map((story) => (
							<CardWithText
								key={story.frontmatter.title}
								link={
									story.frontmatter.altPath
										? `/top-ten-2021/${story.slug}`
										: `/news/${story.slug}`
								}
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

// eslint-disable-next-line func-style, require-await
export async function getStaticProps() {
	const files = fs.readdirSync(path.join("posts/news")),
		// Get Slug and frontmatter from posts
		news = files.map((filename) => {
			const markdownWithMeta = fs.readFileSync(
					path.join("posts/news", filename),
					"utf-8"
				),
				{ data: frontmatter } = matter(markdownWithMeta),
				slug = filename.replace(".md", "");

			return {
				frontmatter,
				slug,
			};
		});

	return {
		props: {
			news: news.sort(sortByDate).reverse(),
		},
	};
}

NewsPage.propTypes = {
	news: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
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
