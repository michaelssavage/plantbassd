import "../styles/styles.global.scss"; // eslint-disable-line
import "bootstrap/dist/css/bootstrap.min.css"; // eslint-disable-line
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"; // eslint-disable-line
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import Router from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "components/Sidebar";
import { ErrorFallback } from "components/Error";
import Footer from "components/Footer";
import { Loading } from "components/Loading";
import { Newsletter } from "components/Newsletter";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Sidebar />
      <Newsletter />
      <Analytics />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {loading ? <Loading /> : <Component {...pageProps} />}
      </ErrorBoundary>
      <Footer />
    </>
  );
}
