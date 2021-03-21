import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useThemeToggle from "../useThemeToggle";
import { ThemeContext, THEME_LIGHT } from "../../styles/ThemeProvider";

it("Test useThemeToggle hook", () => {
  const onToggleTheme = jest.fn();
  const wrapper = ({ children }) => <ThemeContext.Provider value={{ theme: THEME_LIGHT, onToggleTheme }}>{children}</ThemeContext.Provider>;
  const { result } = renderHook(() => useThemeToggle(), { wrapper });

  expect(result.current.theme).toBe(THEME_LIGHT);
  expect(result.current.onToggleTheme).not.toBeCalled();

  act(() => {
    result.current.onToggleTheme();
  });

  expect(result.current.onToggleTheme).toBeCalled();
})
