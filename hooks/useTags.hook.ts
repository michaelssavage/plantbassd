import { useEffect, useState } from "react";
import { FilterProps } from "types/frontmatter";

interface TagProps {
  name: string;
  value: boolean;
}

type FilterTypeProps = "tags" | "city" | "name";

/**
 *
 * @param initTagList - array of name and value
 * @param filterType - String of either city (gigs), tags, or name (links)
 * @param files = array of incoming data
 */
export const useTags = (initTagList: TagProps[], files = [], filterType?: FilterTypeProps) => {
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");
  const [tags, setTags] = useState([]);
  const [newsStories, setNewsStories] = useState(files);
  const [tagList, setTagList] = useState(initTagList);

  const addTag = (tag: TagProps) => {
    setTags([...tags, tag.name]);
  };

  const removeTag = (tag: TagProps) => {
    const newTags = tags.filter((tagItem) => tagItem !== tag.name);
    setTags(newTags);
  };

  const updateTagList = (tag: TagProps) => {
    const idx = tagList.findIndex((event: TagProps) => event === tag);
    const newTagList = [...tagList];
    newTagList[idx].value = !tag.value;
    setTagList(newTagList);
  };

  const handleTags = (tag: TagProps) => {
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
      let filtered = [];
      if (!filterType) {
        filtered =
          tags.length === 0
            ? files
            : files.filter(({ name }: { name: string }) => tags.includes(name));
      } else {
        filtered =
          tags.length === 0
            ? files
            : files.filter((item: FilterProps) => tags.includes(item.frontmatter[filterType]));
      }
      setNewsStories(filtered);
    } catch (event) {
      setHasErrored(true);
      setError(event);
    }
  }, [tags, files, filterType]);

  return { error, handleTags, hasErrored, newsStories, tagList };
};
