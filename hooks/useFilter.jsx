import { useEffect, useState } from "react";

export default function useFilter(takeovers = []) {
	const [hasErrored, setHasErrored] = useState(false);
	const [error, setError] = useState("");
	const [takeoverCards, setTakeoverCards] = useState(takeovers);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		try {
			const filtered =
				filter === ""
					? takeovers
					: takeovers.filter((takeover) =>
							takeover.frontmatter.title.includes(filter)
					  );
			setTakeoverCards(filtered);
		} catch (e) {
			setHasErrored(true);
			setError(e);
		}
	}, [filter, takeoverCards]);

	return { hasErrored, error, takeoverCards, filter, setFilter };
}
