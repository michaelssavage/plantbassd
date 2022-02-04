import { useEffect, useState } from "react";

export default function useFilter(posts = []) {
	const [hasErrored, setHasErrored] = useState(false);
	const [error, setError] = useState("");
	const [postCards, setPostCards] = useState(posts);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		try {
			setPostCards(
				!filter
					? posts
					: posts.filter((post) =>
							post.frontmatter.title
								.toLowerCase()
								.includes(filter.toLowerCase())
					  )
			);
		} catch (err) {
			setHasErrored(true);
			setError(err);
		}
	}, [filter]);

	return { hasErrored, error, postCards, filter, setFilter };
}
