import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import Footer from "../../components/Footer";
import styles from "../../styles/contact.module.scss";

export default function ContactPage() {
	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/collage.jpg",
							amount: 0.4,
						},
					]}
					className="parallaxHeightChange"
				></ParallaxBanner>
			</ParallaxProvider>

			<div className={styles.container}>
				<h1 className={styles.header}>Under Construction</h1>
				<p>
					<a
						className={styles.anchor}
						href="mailto:plantbassddjs@gmail.com"
					>
						Email: plantbassddjs@gmail.com
					</a>
				</p>
				<p>
					Instagram:{" "}
					<a
						className={styles.anchor}
						href="https://www.instagram.com/plantbassddjs/"
					>
						@plantbassddjs
					</a>
				</p>
				<p>
					Site created by{" "}
					<a
						className={styles.anchor}
						href="https://www.github.com/michaelssavage"
					>
						Michael
					</a>
				</p>
			</div>

			<Footer />
		</>
	);
}
