import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from 'styled-components';

import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/themes/base";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
