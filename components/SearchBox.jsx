import PropTypes from "prop-types";
import React from "react";

export default function SearchBox({ styling, filter, setFilter }) {
	return (
		<div className={`input-group ${styling}`}>
			<input
				aria-label="Filter"
				className="form-control"
				onChange={setFilter} // eslint-disable-line react/jsx-no-bind
				placeholder="Filter Artists By Name"
				type="text"
				value={filter}
			/>
		</div>
	);
}

SearchBox.propTypes = {
	filter: PropTypes.string.isRequired,
	setFilter: PropTypes.func.isRequired,
	styling: PropTypes.string.isRequired,
};
