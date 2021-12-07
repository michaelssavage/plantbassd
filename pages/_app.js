import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";
import React from "react";

import Sidebar from "../components/Sidebar";

export default function MyApp({ sidebarList, Component, pageProps }) {
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
			<Sidebar sidebarList={sidebarList} />
			<Component {...pageProps} />
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			sidebarList: JSON.parse(JSON.stringify(sidebarData)),
		},
	};
}
