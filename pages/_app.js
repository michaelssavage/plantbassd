import "../styles/styles.global.scss";
import "../styles/colors.css";
import "bootstrap/dist/css/bootstrap.css";

import Sidebar from "components/Sidebar";
import Head from "next/head";
import React from "react";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Plant Bass'd</title>
				<meta name="Plant Bass'd blog" content="Plant Bass'd" />
				<link rel="icon" href="/pb_favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Sidebar />
			<Component {...pageProps} />
		</>
	);
}
