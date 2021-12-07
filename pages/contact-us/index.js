import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import Footer from "../../components/Footer";
import styles from "../../styles/construction.module.scss";
// import styles from "../contact.module.scss";

export default function ContactPage() {
	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/images/hoodie.jpg",
							amount: 0.4,
						},
					]}
					className="parallaxHeightChange"
				></ParallaxBanner>
			</ParallaxProvider>

			<div className={styles.container}>
				<h1>Under Construction</h1>
			</div>

			<Footer />
		</>
	);
}
