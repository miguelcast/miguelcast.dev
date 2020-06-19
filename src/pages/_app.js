import * as React from "react";
import { ThemeProvider } from 'styled-components';

import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/themes/base";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
