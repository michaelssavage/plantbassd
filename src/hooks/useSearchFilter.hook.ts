import { ChangeEvent, useEffect, useState } from "react";
import Fuse from "fuse.js";

const fuseOptions = {
  threshold: 0.3,
  keys: ["name", "frontmatter.name", "frontmatter.bio"],
};

export const useSearchFilter = (posts = [], type?: "array") => {
  const [searchHasErrored, setSearchHasErrored] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [postCards, setPostCards] = useState(posts);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const fuse = new Fuse(posts, fuseOptions);

    try {
      const result = fuse.search(filter);
      if (filter && !result.length) {
        setPostCards([]);
      } else if (filter && result) {
        const matches = result.map((res) => res.item);
        setPostCards(matches);
      } else {
        setPostCards(posts);
      }
    } catch (err) {
      setSearchHasErrored(true);
      setSearchError(err);
    }
  }, [filter, posts, type]);

  return { searchError, filter, searchHasErrored, postCards, handleSearchChange };
};
