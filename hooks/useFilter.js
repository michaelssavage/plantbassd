import { useEffect, useState } from "react";

export default function useFilter(takeovers = []) {
	const [hasErrored, setHasErrored] = useState(false);
	const [error, setError] = useState("");
	const [takeoverCards, setTakeoverCards] = useState(takeovers);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		try {
			if (!filter) {
				setTakeoverCards(takeovers);
			} else {
				setTakeoverCards(
					takeovers.filter((takeover) =>
						takeover.frontmatter.title.includes(filter)
					)
				);
			}
		} catch (e) {
			setHasErrored(true);
			setError(e);
		}
	}, [filter, takeovers]);

	return { hasErrored, error, takeoverCards, filter, setFilter };
}
