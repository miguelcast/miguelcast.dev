import { theme as base } from './base';

const theme = JSON.parse(JSON.stringify(base));

theme.colors.base = theme.colors.grays["800"];
theme.colors.text = theme.colors.white;
theme.colors.textLight = theme.colors.grays["300"];
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

// Blockquotes
theme.colors.blockquotes = {};
theme.colors.blockquotes.bg = "#1d1f21";


export default theme;
