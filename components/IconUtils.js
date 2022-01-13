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

export const sidebarList = [
	{
		link: "/",
		title: "Home",
	},
	{
		link: "/news",
		title: "News",
	},
	{
		link: "/mixes",
		title: "Mixes",
	},
	{
		link: "/radios",
		title: "Radio",
	},
	{
		link: "/takeovers",
		title: "Takeovers",
	},
	{
		link: "/contact-us",
		title: "Contact Us",
	},
	{
		link: "/links",
		title: "Links",
	},
];

export const socialIconList = [
	{
		link: "https://www.facebook.com/plantbassddjs",
		icon: "facebook",
	},
	{
		link: "https://www.instagram.com/plantbassddjs/",
		icon: "instagram",
	},
	{
		link: "mailto: plantbassddjs@gmail.com",
		icon: "email",
	},
	{
		link: "https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf",
		icon: "spotify",
	},
	{
		link: "https://soundcloud.com/plantbassddjs",
		icon: "soundcloud",
	},
];

export const SocialIcon = (icon, style) => {
	switch (icon) {
		case "Home":
			return <AiFillHome className={style} />;
		case "News":
			return <ImNewspaper className={style} />;
		case "Mixes":
			return <RiSoundcloudLine className={style} />;
		case "Takeovers":
			return <FaSpotify className={style} />;
		case "Radio":
			return <BiRadio className={style} />;
		case "Contact Us":
			return <MdContacts className={style} />;
		case "Links":
			return <AiOutlineLink className={style} />;
		case "facebook":
			return <AiOutlineFacebook className={style} />;
		case "instagram":
			return <AiOutlineInstagram className={style} />;
		case "email":
			return <AiOutlineMail className={style} />;
		case "soundcloud":
			return <RiSoundcloudLine className={style} />;
		default:
			return <RiSpotifyLine className={style} />;
	}
};
