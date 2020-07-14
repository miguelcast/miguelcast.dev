import { useContext } from 'react';

import { ThemeContext } from "../styles/ThemeProvider";

export default function useThemeToggle() {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  return { theme, onToggleTheme };
}
