import React, { useEffect, useState } from "react";

export default function useRequests({ news }, delayTime = 1000) {
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
					await delay(delayTime);
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

	return { tagList, newsStories, isLoading, hasErrored, error };
}
