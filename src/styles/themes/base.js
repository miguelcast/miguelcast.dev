const theme = {
  colors: {
    grays: {
      100: '#F1EEEE',
      300: '#C3C3C3',
      800: '#222530',
      900: '#0E0E0E'
    },
    red: '#D43845',
    yellow: '#F5D18C',
    white: '#ffffff'
  },
  space: [0, 4, 8, 12, 16, 32, 64, 128, 256, 512],
  fontSizes: [0, 12, 14, 16, 20, 24, 32, 48],
  fonts: {
    heading: "'Comfortaa',Futura,-apple-system,cursive",
    body: "'Inter',Futura,-apple-system,sans-serif",
    alternative: "'Concert One',Helvetica,-apple-system,cursive"
  },
  radii: [0, 5, "50%"],
  breakpoints: ['40em', '52em', '64em', '80em'],
};

theme.colors.primary = theme.colors.red;
theme.colors.secondary = theme.colors.yellow;

theme.space.small = theme.space[1];
theme.space.medium = theme.space[2];
theme.space.large = theme.space[3];

export { theme };
