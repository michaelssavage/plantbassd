import Link from "next/link";
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

export const DiscoverMoreBtn = ({ title = "Discover More", link }) => {
	return (
		<div className="globalBottomBtn">
			<Link href={link}>
				<a
					role="button"
					className="text-nowrap btn btn-outline-dark btn-lg"
				>
					{title}
				</a>
			</Link>
		</div>
	);
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
