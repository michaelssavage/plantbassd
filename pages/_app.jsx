import "bootstrap/dist/css/bootstrap.css"; // eslint-disable-line
import "../styles/styles.global.scss"; // eslint-disable-line

import Sidebar from "components/Sidebar";
import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Plant Bass'd</title>
				<meta content="Plant Bass'd" name="Plant Bass'd blog" />
				<link href="/pb_favicon.ico" rel="icon" />
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
			</Head>
			<Sidebar />
			<Component {...pageProps} />
		</>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.instanceOf(Object).isRequired,
};
