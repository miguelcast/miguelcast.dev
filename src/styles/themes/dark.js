import { theme as base } from './base';

const theme = JSON.parse(JSON.stringify(base));

theme.colors.base = theme.colors.grays["800"];
theme.colors.text = theme.colors.white;
theme.colors.waves = theme.colors.grays["900"];
theme.colors.background = theme.colors.grays["800"];

// Logo name component
theme.colors.logo = {};
theme.colors.logo.primary = theme.colors.white;
theme.colors.logo.secondary = theme.colors.grays["300"];

// Post tags
theme.colors.tag = {};
theme.colors.tag.text = theme.colors.secondary;
theme.colors.tag.bg = "#4c433a";

export default theme;