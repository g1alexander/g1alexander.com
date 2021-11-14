import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import "@/styles/code.css";
import { Contact } from "@/components/global/Contact";
import { Header } from "@/components/global/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-green-300 dark:bg-green-800">
      <NextNProgress />

      <Header />

      <Component {...pageProps} />

      <Contact />
    </div>
  );
}

export default MyApp;
