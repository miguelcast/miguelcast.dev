import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import GlobalStyles from "../styles/GlobalStyles";
import ThemeProvider from "../styles/ThemeProvider";
import { theme } from "../styles/themes/base";

const GOOGLE_FONTS = 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Inter&family=Concert+One&display=fallback';
const URL = "https://miguelcast.dev";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
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
