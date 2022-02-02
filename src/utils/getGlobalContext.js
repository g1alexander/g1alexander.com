import React from "react";

export const GlobalContext = React.createContext({
  darkMode: false,
  update: (data) => {},
});
