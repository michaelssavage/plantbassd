import "bootstrap/dist/css/bootstrap.min.css"; // eslint-disable-line
import "../styles/styles.global.scss"; // eslint-disable-line

import Sidebar from "components/Sidebar";
import Head from "next/head";
import PropTypes from "prop-types";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
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
