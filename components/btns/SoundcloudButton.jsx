import PropTypes from "prop-types";
import React from "react";
import { RiSoundcloudLine } from "react-icons/ri";

export default function SoundcloudButton({ styling, link, title }) {
	return (
		<a
			className={`${styling} text-nowrap btn btn-dark btn-lg`}
			href={link}
			role="button"
		>
			<RiSoundcloudLine /> {title}
		</a>
	);
}

SoundcloudButton.propTypes = {
	link: PropTypes.string.isRequired,
	styling: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
