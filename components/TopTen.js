import { useRouter } from "next/router";
import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import styles from "./styles/topTen.module.scss";

export default function TopTen() {
	const router = useRouter();
	return (
		<ParallaxProvider>
			<ParallaxBanner
				className="parallaxHeightChange"
				layers={[
					{
						image: "/top-ten-2021/bg.jpg",
						amount: 0.4,
					},
				]}
			>
				<div className={styles.centered}>
					<h1 name="top-ten-2021" className="header">
						Top 10 Dance Releases
					</h1>
					<p>
						Michael, Oisin, and Peter choose their favourite Albums,
						EPs, LPs, and tracks released in 2021.
					</p>

					<button
						type="button"
						className="btn btn-dark btn-lg"
						onClick={() => router.push("/top-ten-2021")}
					>
						Read More
					</button>
				</div>
			</ParallaxBanner>
		</ParallaxProvider>
	);
}
