import { useEffect, useState } from "react";

export default function useNewsFilter(news = []) {
	const [hasErrored, setHasErrored] = useState(false);
	const [error, setError] = useState("");
	const [tags, setTags] = useState([]);
	const [newsStories, setNewsStories] = useState(news);
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
		try {
			if (tags.length === 0) {
				setNewsStories(news);
			} else {
				setNewsStories(
					news.filter((story) =>
						tags.includes(story.frontmatter.tags)
					)
				);
			}
		} catch (e) {
			setHasErrored(true);
			setError(e);
		}
	}, [tags, news]);

	return { hasErrored, error, newsStories, tagList, handleTags };
}
