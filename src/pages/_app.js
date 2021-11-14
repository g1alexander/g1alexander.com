import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import "@/styles/main.css";
import { Contact } from "@/components/global/Contact";
import { Header } from "@/components/global/Header";

function MyApp({ Component, pageProps }) {
  //TODO: por implemetar cambio de color de la barra de progreso
  return (
    <div className="bg-green-300 dark:bg-green-800">
      <NextNProgress color={true ? "#042333" : "#DFEEEA"} />

      <Header />

      <Component {...pageProps} />

      <Contact />
    </div>
  );
}

export default MyApp;
