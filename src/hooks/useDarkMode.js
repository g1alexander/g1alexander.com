import { useEffect, useContext } from "react";
import { GlobalContext } from "@/utils/getGlobalContext";

export function useDarkMode(state) {
  const global = useContext(GlobalContext);

  useEffect(() => {
    if (!state && state !== false && state !== true) {
      if (!localStorage.getItem("dark-mode")) {
        if (
          (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches) === true
        ) {
          localStorage.setItem("dark-mode", "true");
          global.update({ darkMode: true });
        } else {
          localStorage.setItem("dark-mode", "false");
          global.update({ darkMode: false });
        }
      } else {
        global.update({
          darkMode: JSON.parse(localStorage.getItem("dark-mode")),
        });
      }
    } else {
      localStorage.setItem("dark-mode", state);
      global.update({ darkMode: state });
    }

    global.darkMode === true
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [state, global.darkMode, global.update]);

  return global.darkMode;
}
