import { ChangeEvent, useEffect, useState } from "react";
import { sortAlphabetically } from "utils";

export const useSearchFilter = (posts = [], type?: "array") => {
  const [searchHasErrored, setSearchHasErrored] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [postCards, setPostCards] = useState(posts);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    try {
      let filtered = [];
      if (type) {
        filtered = !filter
          ? posts
          : posts
              .filter((post) => post.name.toLowerCase().includes(filter.toLowerCase()))
              .sort(sortAlphabetically);
      } else {
        filtered = !filter
          ? posts
          : posts.filter((post) =>
              post.frontmatter.name.toLowerCase().includes(filter.toLowerCase())
            );
      }
      setPostCards(filtered);
    } catch (err) {
      setSearchHasErrored(true);
      setSearchError(err);
    }
  }, [filter, posts, type]);

  return { searchError, filter, searchHasErrored, postCards, handleSearchChange };
};
