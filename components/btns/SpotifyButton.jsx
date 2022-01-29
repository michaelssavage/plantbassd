import PropTypes from "prop-types";
import { FaSpotify } from "react-icons/fa";

export default function SpotifyButton({ styling, link, title }) {
	return (
		<a
			className={`${styling} text-nowrap btn btn-dark btn-lg`}
			href={link}
			role="button"
		>
			<FaSpotify /> {title}
		</a>
	);
}

SpotifyButton.propTypes = {
	link: PropTypes.string.isRequired,
	styling: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
