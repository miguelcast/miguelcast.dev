import * as React from "react";
import Head from "next/head";
import Router from "next/router";
import TagManager from 'react-gtm-module'

import GlobalStyles from "../styles/GlobalStyles";
import ThemeProvider from "../styles/ThemeProvider";
import { theme } from "../styles/themes/base";

const GOOGLE_FONTS = 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Inter&family=Concert+One&display=fallback';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID
}

const isClientAndGaIsEnabled = () => (typeof window !== "undefined" && window.ga);

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    function sendPageView(url) {
      if (isClientAndGaIsEnabled()) {
        window.ga("set", { page: url, title: document.title });
        window.ga("send", "pageview");
      }
    }
    Router.events.on("routeChangeComplete", sendPageView);
    return () => {
      Router.events.off("routeChangeComplete", sendPageView);
    };
  }, [typeof window !== "undefined"]);

  React.useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/favicons/site.webmanifest.json" />
        <meta name="theme-color" content={theme.primary} />

        <link rel="preload" as="style" href={GOOGLE_FONTS} />
        <link href={GOOGLE_FONTS} rel="stylesheet" />
      </Head>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
