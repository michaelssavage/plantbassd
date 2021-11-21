import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../construction.module.scss";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function ContactPage() {
	return (
		<>
			<Navbar />

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
