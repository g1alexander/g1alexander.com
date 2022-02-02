import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import "@/styles/main.css";
import { useState } from "react";
import { GlobalContext } from "@/utils/getGlobalContext";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState({ darkMode: false, update });

  function update(data) {
    setDarkMode(Object.assign({}, darkMode, data));
  }

  return (
    <div className="bg-white dark:bg-dark-600">
      <NextNProgress color="#0333FF" />

      <GlobalContext.Provider value={darkMode}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </div>
  );
}

export default MyApp;
