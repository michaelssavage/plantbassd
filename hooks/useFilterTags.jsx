import { useEffect, useState } from "react";

export default function useFilterTags(initTagList, filterType, news = []) {
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");
  const [tags, setTags] = useState([]);
  const [newsStories, setNewsStories] = useState(news);
  const [tagList, setTagList] = useState(initTagList);

  const addTag = (tag) => {
    setTags([...tags, tag.name]);
  };

  const removeTag = (tag) => {
    const newTags = tags.filter((tagItem) => tagItem !== tag.name);
    setTags(newTags);
  };

  const updateTagList = (tag) => {
    const idx = tagList.findIndex((event) => event === tag),
      newTagList = [...tagList];
    newTagList[idx].value = !tag.value;
    setTagList(newTagList);
  };

  const handleTags = (tag) => {
    // On onClick, either add or remove tags to the array.
    if (tag.value) {
      removeTag(tag);
    } else {
      addTag(tag);
    }
    updateTagList(tag);
  };

  useEffect(() => {
    try {
      const filtered =
        tags.length === 0
          ? news
          : news.filter((story) =>
              filterType === "news"
                ? tags.includes(story.frontmatter.tags)
                : tags.includes(story.frontmatter.city)
            );
      setNewsStories(filtered);
    } catch (event) {
      setHasErrored(true);
      setError(event);
    }
  }, [tags, news, filterType]);

  return { error, handleTags, hasErrored, newsStories, tagList };
}
