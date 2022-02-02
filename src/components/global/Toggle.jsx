import { useDarkMode } from "@/hooks/useDarkMode";
import { useState } from "react";

export function Toggle() {
  const [darkMode, setDarkMode] = useState();

  const state = useDarkMode(darkMode);

  const handleDarkMode = () => setDarkMode(!state);

  return (
    <>
      {state ? (
        <button onClick={handleDarkMode}>🌞</button>
      ) : (
        <button onClick={handleDarkMode}>🌙</button>
      )}
    </>
  );
}
