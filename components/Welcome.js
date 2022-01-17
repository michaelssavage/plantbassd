import Image from "next/image";
import React, { useEffect,useRef } from "react";
import Rellax from "rellax";

import { DiscoverMoreBtn } from "./Btns";
import styles from "./styles/welcome.module.scss";

export default function Welcome() {
	const rellaxRef = useRef();

	useEffect(() => {
		new Rellax(rellaxRef.current, {
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
					src="/various/bg.jpg"
					alt="background image"
					className={styles.large}
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className={styles.welcomeText}>
				<div className={styles.textShape} ref={rellaxRef}>
					<h1 className="header">Plant Bass'd</h1>
					<p>
						Profiling the experimental dance music world and
						throwing parties in between.
					</p>
					<DiscoverMoreBtn title="About Us" link="/contact-us" />
				</div>
			</div>
		</section>
	);
}
