import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  ThemeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function UseTheme() {
  return useContext(ThemeContext);
}
