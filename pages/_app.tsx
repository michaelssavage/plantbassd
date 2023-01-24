import "../styles/styles.global.scss"; // eslint-disable-line
import "bootstrap/dist/css/bootstrap.min.css"; // eslint-disable-line
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import Sidebar from "components/Sidebar";
import { ErrorFallback } from "components/Error";
import Footer from "components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Sidebar />
      <Analytics />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Footer />
    </>
  );
}
