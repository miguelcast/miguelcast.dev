import * as React from "react";
import { theme } from "../src/styles/themes/base"
import GlobalStyles from "../src/styles/GlobalStyles";
import ThemeProvider from "../src/styles/ThemeProvider";

export const decorators = [
  (Story) => (
    <div style={{ margin: '2em' }}>
      <ThemeProvider>
        <GlobalStyles/>
        <Story />
      </ThemeProvider>
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: theme.colors.grays["800"],
      },
      {
        name: 'light',
        value: theme.colors.grays["100"],
      },
    ],
  },
}
