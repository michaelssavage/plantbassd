import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function MyApp({ Component, pageProps }) {
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
			<Component {...pageProps} />
		</>
	);
}
