import "../styles/styles.global.scss"; // eslint-disable-line
import "bootstrap/dist/css/bootstrap.min.css"; // eslint-disable-line

import Head from "next/head";
import PropTypes from "prop-types";
import Sidebar from "components/Sidebar";

export function reportWebVitals(metric) {
  // eslint-disable-next-line no-console
  console.log(metric);
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
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
