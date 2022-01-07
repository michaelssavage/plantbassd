import { useRouter } from "next/router";
import React from "react";
import { FaInstagram,FaSoundcloud, FaSpotify } from "react-icons/fa";
import styles from "styles/page.module.scss";

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

export const InstagramButton = ({ link, title }) => {
	return (
		<a
			role="button"
			className={`${styles.instagram} text-nowrap btn btn-dark btn-lg`}
			href={link}
		>
			<FaInstagram /> {title}
		</a>
	);
};

export const SoundcloudButton = ({ link, title }) => {
	return (
		<a
			role="button"
			className={`${styles.soundcloud} text-nowrap btn btn-dark btn-lg`}
			href={link}
		>
			<FaSoundcloud /> {title}
		</a>
	);
};

export const SpotifyButton = ({ link, title }) => {
	return (
		<a
			role="button"
			className={`${styles.spotify} text-nowrap btn btn-dark btn-lg`}
			href={link}
		>
			<FaSpotify /> {title}
		</a>
	);
};
