import "react-placeholder/lib/reactPlaceholder.css";

import { CardWithText } from "components/Card";
import Footer from "components/Footer";
import { GoBack, sortByDate } from "components/Utilities";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactPlaceholder from "react-placeholder";
import styles from "styles/page.module.scss";

const TagButton = ({ tag, handleTags }) => {
	return (
		<button
			type="button"
			className={`btn btn-outline-dark ${tag.value ? "active" : ""}`}
			onClick={() => handleTags(tag)}
		>
			{tag.name} {tag.value ? <AiOutlineCloseCircle /> : null}
		</button>
	);
};

export default function NewsPage({ news }) {
	const [hasErrored, setHasErrored] = useState(false);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const [tags, setTags] = useState([]);
	const [newsStories, setNewsStories] = useState([]);

	const [tagList, setTagList] = useState([
		{ name: "gigs", value: false },
		{ name: "fresh juice", value: false },
		{ name: "reviews", value: false },
	]);

	const addTag = (tag) => {
		setTags([...tags, tag.name]);
	};

	const removeTag = (tag) => {
		const newTags = tags.filter((t) => t !== tag.name);
		setTags(newTags);
	};

	const updateTagList = (tag) => {
		const idx = tagList.findIndex((e) => e === tag);
		let newTagList = [...tagList];
		newTagList[idx].value = !tag.value;
		setTagList(newTagList);
	};

	const handleTags = (tag) => {
		// onClick, either add or remove tags to the array.
		if (!tag.value) {
			addTag(tag);
		} else {
			removeTag(tag);
		}
		updateTagList(tag);
	};

	useEffect(() => {
		async function delayFunc() {
			try {
				if (tags.length === 0) {
					await delay(1600);
					setIsLoading(false);
					setNewsStories(news);
				} else {
					setIsLoading(false);
					setNewsStories(
						news.filter((story) =>
							tags.includes(story.frontmatter.tags)
						)
					);
				}
			} catch (e) {
				setIsLoading(false);
				setHasErrored(true);
				setError(e);
			}
		}
		delayFunc();
	}, [tags, news]);

	if (hasErrored === true) {
		return (
			<div className="text-danger">
				Error: <b> loading Data failed {error}</b>
			</div>
		);
	}

	return (
		<>
			<div className={styles.newsBG}>
				<Container>
					<h1 className={styles.bHeader}>Plant Bass'd News</h1>

					<p className={styles.bTexter}>
						News about Fresh Juice, Gigs, and all things Plant
						Bass'd. Keep up to date on our Instagram,{" "}
						<a
							className="blackAnchor"
							href="http://instagra.com/plantbassddjs"
						>
							@plantbassddjs
						</a>
						.
					</p>

					<div className={styles.btnGroup} role="group">
						<div>Filters:</div>

						{tagList &&
							tagList.map((tag, index) => (
								<TagButton
									key={`${index}_${tag.name}`}
									tag={tag}
									handleTags={handleTags}
								/>
							))}
					</div>
					<ReactPlaceholder
						type="media"
						rows={15}
						ready={isLoading === false}
						color="rgba(30, 30, 30, 0.85)"
					>
						<Row className="g-3">
							{newsStories.map((story) => (
								<CardWithText
									key={story.frontmatter.title}
									post={story}
									link={`/news/${story.slug}`}
								/>
							))}
						</Row>
					</ReactPlaceholder>

					<GoBack />
				</Container>
			</div>

			<Footer />
		</>
	);
}

export async function getStaticProps() {
	// get files from the news directory
	const files = fs.readdirSync(path.join("posts/news"));

	//get Slug and frontmatter from posts
	const news = files.map((filename) => {
		const slug = filename.replace(".md", "");

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts/news", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			news: news.sort(sortByDate).reverse(),
		},
	};
}
