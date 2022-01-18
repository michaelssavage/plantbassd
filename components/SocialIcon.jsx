import PropTypes from "prop-types";
import React from "react";
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
	switch (icon) {
		case "Home":
			return <AiFillHome className={styling} />;
		case "News":
			return <ImNewspaper className={styling} />;
		case "Mixes":
			return <RiSoundcloudLine className={styling} />;
		case "Takeovers":
			return <FaSpotify className={styling} />;
		case "Radio":
			return <BiRadio className={styling} />;
		case "Contact Us":
			return <MdContacts className={styling} />;
		case "Links":
			return <AiOutlineLink className={styling} />;
		case "facebook":
			return <AiOutlineFacebook className={styling} />;
		case "instagram":
			return <AiOutlineInstagram className={styling} />;
		case "email":
			return <AiOutlineMail className={styling} />;
		case "soundcloud":
			return <RiSoundcloudLine className={styling} />;
		default:
			return <RiSpotifyLine className={styling} />;
	}
}

SocialIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	styling: PropTypes.string.isRequired,
};
