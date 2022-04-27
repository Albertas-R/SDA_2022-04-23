import React from "react";

export const Theme = {
  light: {
    backgroundColor: "lightyellow",
    color: "black"
  },
  dark: {
    backgroundColor: "black",
    color: "white"
  },
};

export const ThemeContext = React.createContext(Theme.light);