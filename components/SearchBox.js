import React from "react";

import styles from "@/styles/searchbox.module.scss";

export default function SearchBox() {
	return (
		<div className={`input-group ${styles.searchButton}`}>
			<input
				type="text"
				className="form-control"
				placeholder="Filter The Takeovers.."
				aria-label="Filter The Takeovers"
			/>
			<div className="input-group-append">
				<button className="btn btn-outline-dark" type="button">
					Filter
				</button>
			</div>
		</div>
	);
}
