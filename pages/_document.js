import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="application-name" content="Plant Bass'd" />
          <meta name="theme-color" content="#060b26" />
          <meta
            name="description"
            content="Profiling the experimental dance music world and
					throwing parties in between. 
					A blog showcasing electronic music acts in Ireland and 
					around the world through curated Spotify playlists, 
					Soundcloud Mixes, and reviews of new releases."
          />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" href="/pb_favicon.ico" type="image/png" />
          <link rel="apple-touch-icon" href="icons/icon-192x192.png" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Plant Bass'd'" />
          <meta
            property="og:description"
            content="Profiling the experimental dance music world and
					throwing parties in between. 
					A blog showcasing electronic music acts in Ireland and 
					around the world through curated Spotify playlists, 
					Soundcloud Mixes, and reviews of new releases."
          />
          <meta property="og:site_name" content="Plant Bass'd" />
          <meta property="og:url" content="https://plantbassd.com" />
          <meta
            property="og:image"
            content="https://plantbassd.com/icons/icon-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
