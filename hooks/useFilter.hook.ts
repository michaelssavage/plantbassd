import { ChangeEvent, useEffect, useState } from "react";

export const useFilter = (posts = [], type: string) => {
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");
  const [postCards, setPostCards] = useState(posts);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    try {
      if (filter && type == "posts") {
        setPostCards(
          posts.filter((post) => post.frontmatter.name.toLowerCase().includes(filter.toLowerCase()))
        );
      } else if (filter && type == "array") {
        setPostCards(
          posts.filter((post) => post.name.toLowerCase().includes(filter.toLowerCase()))
        );
      } else {
        setPostCards(posts);
      }
    } catch (err) {
      setHasErrored(true);
      setError(err);
    }
  }, [filter, posts, type]);

  return { error, filter, hasErrored, postCards, handleSearchChange };
};
