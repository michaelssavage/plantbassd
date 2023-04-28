import { ChangeEvent, useEffect, useState } from "react";
import { sortAlphabetically } from "utils";

export const useFilter = (posts = [], type?: "array") => {
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");
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
      setHasErrored(true);
      setError(err);
    }
  }, [filter, posts, type]);

  return { error, filter, hasErrored, postCards, handleSearchChange };
};
