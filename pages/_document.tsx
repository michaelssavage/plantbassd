import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ReactElement } from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="application-name" content="PLANT BASS'D" />
          <meta name="theme-color" content="#060b26" />
          <meta
            name="description"
            content="Profiling the experimental dance music world and
					throwing parties in between. 
					A blog showcasing electronic music acts in Ireland and 
					around the world through curated Spotify playlists, 
					SoundCloud Mixes, and reviews of new releases."
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/pb_favicon.ico" type="image/png" />
          <link rel="apple-touch-icon" href="https://plantbassd.com/icons/icon-192x192.png" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="PLANT BASS'D - Experimental dance music blog and party thrower"
          />
          <meta
            property="og:description"
            content="We profile the experimental dance music world through reviews, interviews, and spotlights of rising artists in Ireland & The UK. We throw parties in between in Edinburgh, Glasgow, and Galway."
          />
          <meta property="og:site_name" content="PLANT BASS'D" />
          <meta property="og:url" content="https://plantbassd.com" />
          <meta property="og:image" content="https://plantbassd.com/icons/icon-192x192.png" />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
