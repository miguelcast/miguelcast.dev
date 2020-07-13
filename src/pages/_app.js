import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from 'styled-components';

import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/themes/base";
// import theme from "../styles/themes/light";

const GOOGLE_FONTS = 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Inter&family=Concert+One&display=swap';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="About Miguel Cast. Tutorials focus on React, Performance, GraphQl, CSS and HTML" />

        <link rel="preload" as="style" href={GOOGLE_FONTS} />
        <link href={GOOGLE_FONTS} rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
