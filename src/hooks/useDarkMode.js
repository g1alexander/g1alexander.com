import { useEffect, useState } from "react";

export function useDarkMode(state) {
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    if (!state && state !== false && state !== true) {
      if (!localStorage.getItem("dark-mode")) {
        if (
          (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches) === true
        ) {
          localStorage.setItem("dark-mode", "true");
          setDarkMode(true);
        } else {
          localStorage.setItem("dark-mode", "false");
          setDarkMode(false);
        }
      } else {
        setDarkMode(JSON.parse(localStorage.getItem("dark-mode")));
      }
    } else {
      localStorage.setItem("dark-mode", state);
      setDarkMode(state);
    }

    darkMode === true
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [state, darkMode]);

  return darkMode;
}
