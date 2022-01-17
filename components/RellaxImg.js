import Image from "next/image";
import React, { useEffect } from "react";
import Rellax from "rellax";

import { DiscoverMoreBtn } from "./Btns";
import styles from "./styles/welcome.module.scss";

export default function RellaxImg({ main, img }) {
	useEffect(() => {
		new Rellax(".animate", {
			speed: -5,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		});
	}, []);

	return (
		<section>
			<div className={styles.bgWrap}>
				<Image
					src={img}
					alt="background image"
					className={styles.large}
					layout="fill"
					objectFit="cover"
				/>
			</div>

			{main ? <Welcome /> : <About />}
		</section>
	);
}

const Welcome = () => {
	return (
		<div className={styles.welcomeText}>
			<div className={`animate ${styles.textShape}`}>
				<h1 className="header">Plant Bass'd</h1>
				<p>
					Profiling the experimental dance music world and throwing
					parties in between.
				</p>
				<DiscoverMoreBtn title="About Us" link="/contact-us" />
			</div>
		</div>
	);
};

const About = () => {
	return (
		<div className={styles.aboutText}>
			<div className={styles.textShape}>
				<h1 className="header animate">About Us</h1>
			</div>
		</div>
	);
};
