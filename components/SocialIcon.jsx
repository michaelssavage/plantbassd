import {
	AiFillHome,
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineLink,
	AiOutlineMail,
} from "react-icons/ai";
import { BiRadio } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ImNewspaper } from "react-icons/im";
import { MdContacts, MdLocalDrink } from "react-icons/md";
import { RiSoundcloudLine, RiSpotifyLine } from "react-icons/ri";
import { SiBandcamp } from "react-icons/si";
import { useMemo } from "react";
import PropTypes from "prop-types";

function Switcher({ icon }) {
	switch (icon.toLowerCase()) {
		case "home":
			return <AiFillHome />;
		case "news":
			return <ImNewspaper />;
		case "mixes":
			return <RiSoundcloudLine />;
		case "takeovers":
			return <FaSpotify />;
		case "radio":
			return <BiRadio />;
		case "contact us":
			return <MdContacts />;
		case "links":
			return <AiOutlineLink />;
		case "facebook":
			return <AiOutlineFacebook />;
		case "instagram":
			return <AiOutlineInstagram />;
		case "email":
			return <AiOutlineMail />;
		case "soundcloud":
			return <RiSoundcloudLine />;
		case "bandcamp":
			return <SiBandcamp />;
		case "fresh juice":
			return <MdLocalDrink />;
		default:
			return <RiSpotifyLine />;
	}
}

export default function SocialIcon({ icon, styling = null }) {
	const styleMemo = useMemo(() => ({ className: styling }), [styling]);
	return (
		<IconContext.Provider value={styleMemo}>
			<Switcher icon={icon} />
		</IconContext.Provider>
	);
}

SocialIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	styling: PropTypes.string.isRequired,
};

Switcher.propTypes = {
	icon: PropTypes.string.isRequired,
};
