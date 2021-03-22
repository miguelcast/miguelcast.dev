import * as React from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

import themeDark from "../styles/themes/dark";
import themeLight from "../styles/themes/light";

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';
export const THEME_KEY = 'theme';

export const ThemeContext = React.createContext({
  theme: THEME_DARK,
  onToggleTheme: () => {}
});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(THEME_DARK);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    if (localTheme && localTheme !== THEME_DARK) {
      setTheme(localTheme);
    }
    setIsMounted(true);
  }, []);

  function toggleTheme() {
    if (theme === THEME_LIGHT) {
      localStorage.setItem(THEME_KEY, THEME_DARK);
      setTheme(THEME_DARK);
    } else {
      localStorage.setItem(THEME_KEY, THEME_LIGHT);
      setTheme(THEME_LIGHT);
    }
  }

  /*if (!isMounted) {
    return null;
  }*/

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: toggleTheme }}>
      <ThemeProviderSC theme={theme === THEME_DARK ? themeDark : themeLight}>
        {children}
      </ThemeProviderSC>
    </ThemeContext.Provider>
  );
}
