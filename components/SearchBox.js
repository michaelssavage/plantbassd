import React from "react";

export default function SearchBox({ style, filter, setFilter }) {
	return (
		<div className={`input-group ${style}`}>
			<input
				type="text"
				className="form-control"
				placeholder="Filter"
				aria-label="Filter"
				onChange={(e) => setFilter(e.target.value)}
				value={filter}
			/>
		</div>
	);
}
