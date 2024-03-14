import { useEffect, useState } from "react";
import { Frontmatter } from "types/frontmatter";

interface TagProps {
  name: string;
  value: boolean;
}

interface Optionals {
  name?: string;
  frontmatter?: Frontmatter;
}

/**
 * Filter a list using predefined tags
 *
 * @param initTagList - array of name and value
 * @param files = array of incoming data
 * @param filterType - String of either city (gigs), tags (news) for frontmatter or links for linkList
 */
export const useTagsFilter = <T extends Optionals>(
  initTagList: TagProps[],
  files: T[],
  filterType: "city" | "tags" | "links"
) => {
  const [tagsError, setTagsError] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<T[]>([]);
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
      if (tags.length === 0) {
        filtered = files;
      } else if (filterType === "links") {
        filtered = files.filter(({ name }) => name && tags.includes(name));
      } else {
        filtered = files.filter(
          ({ frontmatter }) => frontmatter && tags.includes(frontmatter[filterType] ?? "")
        );
      }
      setFilteredPosts(filtered);
    } catch (event) {
      setTagsError(event as string);
    }
  }, [files, filterType, tags]);

  return { tagsError, filteredPosts, tagList, handleTags };
};
