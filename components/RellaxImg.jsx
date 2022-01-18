import Image from "next/image";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Rellax from "rellax";

import DiscoverMoreBtn from "@/btns/DiscoverMoreBtn";

import styles from "./styles/welcome.module.scss";

export default function RellaxImg({ main, img }) {
	useEffect(() => {
		// eslint-disable-next-line new-cap, no-new
		new Rellax(".animate", {
			center: false,
			horizontal: false,
			round: true,
			speed: -5,
			vertical: true,
			wrapper: null,
		});
	}, []);

	return (
		<section>
			<div className={styles.bgWrap}>
				<Image
					alt="background image"
					layout="fill"
					objectFit="cover"
					src={img}
				/>
			</div>

			{main ? <Welcome /> : <About />}
		</section>
	);
}

function Welcome() {
	return (
		<div className={styles.welcomeText}>
			<div className={`animate ${styles.textShape}`}>
				<h1 className={styles.header}>Plant Bass'd</h1>
				<p>
					Profiling the experimental dance music world and throwing
					parties in between.
				</p>
				<DiscoverMoreBtn link="/contact-us" title="About Us" />
			</div>
		</div>
	);
}

function About() {
	return (
		<div className={styles.aboutText}>
			<div className={`animate ${styles.textShape}`}>
				<h1 className={styles.header}>About Us</h1>
			</div>
		</div>
	);
}

RellaxImg.propTypes = {
	img: PropTypes.string.isRequired,
	main: PropTypes.bool.isRequired,
};
