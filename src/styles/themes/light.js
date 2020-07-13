const theme = {
  colors: {
    grays: {
      100: '#0E0E0E',
      300: '#C3C3C3',
      800: '#9498a7',
      900: '#F1EEEE'
    },
    red: '#D43845',
    yellow: '#F5D18C',
    white: '#0E0E0E'
  },
  space: [0, 4, 8, 12, 16, 32, 64, 128, 256, 512],
  fontSizes: [0, 12, 14, 16, 20, 24, 32, 48],
  fonts: {
    heading: "'Comfortaa', cursive",
    body: "'Inter', sans-serif",
    alternative: "'Concert One', cursive"
  },
  radii: [0, 5, "50%"],
  breakpoints: ['40em', '52em', '64em', '80em'],
};

theme.colors.primary = theme.colors.red;
theme.colors.secondary = theme.colors.yellow;
theme.colors.base = theme.colors.grays["800"];
theme.colors.text = theme.colors.white;

theme.space.small = theme.space[1];
theme.space.medium = theme.space[2];
theme.space.large = theme.space[3];

// Logo name component
theme.colors.logo = {};
theme.colors.logo.primary = theme.colors.white;
theme.colors.logo.secondary = theme.colors.grays["300"];

/*
  theme.mediaQueries = {
    small: `@media screen and (min-width: ${theme.breakpoints[0]})`,
    medium: `@media screen and (min-width: ${theme.breakpoints[1]})`,
    large: `@media screen and (min-width: ${theme.breakpoints[2]})`,
  }
*/

export default theme;
