import { theme as base } from './base';

const theme = JSON.parse(JSON.stringify(base));

theme.colors.secondary = theme.colors.yellows["500"];
theme.colors.base = theme.colors.grays["300"];
theme.colors.text = theme.colors.grays["900"];
theme.colors.waves = theme.colors.grays["300"];
theme.colors.background = theme.colors.grays["100"];

// Logo name component
theme.colors.logo = {};
theme.colors.logo.primary = theme.colors.grays["900"];
theme.colors.logo.secondary = theme.colors.white;

// Post tags
theme.colors.tag = {};
theme.colors.tag.text = theme.colors.primary;
theme.colors.tag.bg = "#eebdc6";

export default theme;
