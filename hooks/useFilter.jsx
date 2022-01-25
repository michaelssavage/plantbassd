import { useEffect, useState } from "react";

export default function useFilter(takeovers = []) {
	const [hasErrored, setHasErrored] = useState(false);
	const [error, setError] = useState("");
	const [takeoverCards, setTakeoverCards] = useState(takeovers);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		try {
			setTakeoverCards(
				!filter
					? takeovers
					: takeovers.filter((takeover) =>
							takeover.frontmatter.title
								.toLowerCase()
								.includes(filter.toLowerCase())
					  )
			);
		} catch (err) {
			setHasErrored(true);
			setError(err);
		}
	}, [filter]);

	return { hasErrored, error, takeoverCards, filter, setFilter };
}
