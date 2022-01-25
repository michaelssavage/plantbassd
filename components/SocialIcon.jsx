import PropTypes from "prop-types";
import React from "react";
import { IconContext } from "react-icons";
import {
	AiFillHome,
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineLink,
	AiOutlineMail,
} from "react-icons/ai";
import { BiRadio } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { MdContacts } from "react-icons/md";
import { RiSoundcloudLine, RiSpotifyLine } from "react-icons/ri";

export default function SocialIcon({ icon, styling }) {
	const Switcher = () => {
		switch (icon) {
			case "Home":
				return <AiFillHome />;
			case "News":
				return <ImNewspaper />;
			case "Mixes":
				return <RiSoundcloudLine />;
			case "Takeovers":
				return <FaSpotify />;
			case "Radio":
				return <BiRadio />;
			case "Contact Us":
				return <MdContacts />;
			case "Links":
				return <AiOutlineLink />;
			case "facebook":
				return <AiOutlineFacebook />;
			case "instagram":
				return <AiOutlineInstagram />;
			case "email":
				return <AiOutlineMail />;
			case "soundcloud":
				return <RiSoundcloudLine />;
			default:
				return <RiSpotifyLine />;
		}
	};

	return (
		<IconContext.Provider value={{ className: styling }}>
			<Switcher />
		</IconContext.Provider>
	);
}

SocialIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	styling: PropTypes.string.isRequired,
};
