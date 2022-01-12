import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col } from "react-bootstrap";
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";
import { RiSoundcloudLine, RiSpotifyLine } from "react-icons/ri";

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
			<RiSpotifyLine /> {title}
		</a>
	);
};

export const SocialIcon = ({ styleContainer, styleIcon, link, icon }) => {
	return (
		<Col className={styleContainer}>
			<Link href={link}>
				<a>
					{(() => {
						switch (icon) {
							case "facebook":
								return (
									<AiOutlineFacebook className={styleIcon} />
								);
							case "instagram":
								return (
									<AiOutlineInstagram className={styleIcon} />
								);
							case "email":
								return <AiOutlineMail className={styleIcon} />;
							case "spotify":
								return <RiSpotifyLine className={styleIcon} />;
							default:
								return (
									<RiSoundcloudLine className={styleIcon} />
								);
						}
					})()}
				</a>
			</Link>
		</Col>
	);
};
