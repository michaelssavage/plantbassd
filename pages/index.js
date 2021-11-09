import Head from "next/head";
import Navbar from "../components/Navbar/Navbar.js";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import Mixes from "../components/Mixes/Mixes.js";
import Takeover from "../components/Takeover/Takeover.js";

export default function Home() {
	return (
		<>
			<Head>
				<title>Plant Bass'd</title>
				<meta name="Plant Bass'd DJs blog" content="Plant Bass'd" />
				<link rel="icon" href="/pb_favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<Navbar />

			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: "/images/hoodie.jpg",
							amount: 0.4,
						},
					]}
					style={{ height: "100vh" }}
				></ParallaxBanner>
			</ParallaxProvider>

			<Mixes />

			<Takeover />
		</>
	);
}
