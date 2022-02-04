import PropTypes from "prop-types";
import SocialIcon from "components/SocialIcon";

export default function SocialMediaBtn({ styling, link, icon, title }) {
	return (
		<a
			className={`${styling} text-nowrap btn btn-dark btn-lg`}
			href={link}
			role="button"
		>
			<SocialIcon icon={icon} /> {title}
		</a>
	);
}

SocialMediaBtn.propTypes = {
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	styling: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
