import { useRouter } from "next/router";
import React from "react";

export default function GoBack() {
	const router = useRouter();
	return (
		<div className="globalBottomBtn">
			<button
				className="btn btn-outline-dark btn-lg"
				onClick={() => router.back()}
				type="button"
			>
				Go Back
			</button>
		</div>
	);
}
