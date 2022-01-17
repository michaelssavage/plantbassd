import Image from "next/image";
import React, { useEffect } from "react";
import Rellax from "rellax";

import styles from "./styles/welcome.module.scss";

export default function AboutUs() {
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
					src="/various/collage.jpg"
					alt="background image"
					className={styles.large}
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className={styles.aboutText}>
				<div className={styles.textShape}>
					<h1 className="header animate">About Us</h1>
				</div>
			</div>
		</section>
	);
}
