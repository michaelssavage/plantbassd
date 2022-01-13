import { useRouter } from "next/router";
import React from "react";
import { FaSpotify } from "react-icons/fa";
import { RiSoundcloudLine } from "react-icons/ri";

export const GoBack = () => {
	const router = useRouter();
	return (
		<div className="globalBottomBtn">
			<button
				type="button"
				className="btn btn-outline-dark btn-lg"
				onClick={() => router.back()}
			>
				Go Back
			</button>
		</div>
	);
};

export const sortByDate = (a, b) => {
	return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
};

export const SoundcloudButton = ({ style, link, title }) => {
	return (
		<a
			role="button"
			className={`${style} text-nowrap btn btn-dark btn-lg`}
			href={link}
		>
			<RiSoundcloudLine /> {title}
		</a>
	);
};

export const SpotifyButton = ({ style, link, title }) => {
	return (
		<a
			role="button"
			className={`${style} text-nowrap btn btn-dark btn-lg`}
			href={link}
		>
			<FaSpotify /> {title}
		</a>
	);
};
