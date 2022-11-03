import { useEffect, useState } from "react";

export default function useFilter(posts = []) {
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");
  const [postCards, setPostCards] = useState(posts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      setPostCards(
        filter ? posts.filter((post) => post.frontmatter.name.toLowerCase().includes(filter.toLowerCase())) : posts
      );
    } catch (err) {
      setHasErrored(true);
      setError(err);
    }
  }, [filter, posts]);

  return { error, filter, hasErrored, postCards, setFilter };
}
