import { theme as base } from './base';

const theme = JSON.parse(JSON.stringify(base));

theme.colors.base = theme.colors.grays["300"];
theme.colors.text = theme.colors.grays["900"];
theme.colors.waves = theme.colors.grays["300"];
theme.colors.background = theme.colors.grays["100"];

// Logo name component
theme.colors.logo = {};
theme.colors.logo.primary = theme.colors.grays["900"];
theme.colors.logo.secondary = theme.colors.white;

export default theme;
