import { useDarkMode } from "@/hooks/useDarkMode";
import { useState } from "react";

export function Toggle() {
  const [darkMode, setDarkMode] = useState();

  const state = useDarkMode(darkMode);

  const handleDarkMode = () => setDarkMode(!state);

  return (
    <>
      {state ? (
        <button className="px-2" onClick={handleDarkMode}>
          🌞
        </button>
      ) : (
        <button className="px-2" onClick={handleDarkMode}>
          🌙
        </button>
      )}
    </>
  );
}
