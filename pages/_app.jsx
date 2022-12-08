import "../styles/styles.global.scss"; // eslint-disable-line
import "bootstrap/dist/css/bootstrap.min.css"; // eslint-disable-line
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import PropTypes from "prop-types";
import Sidebar from "components/Sidebar";
import { ErrorBoundary } from "components/Error";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Sidebar />
      <Analytics />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
