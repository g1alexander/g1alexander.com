import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import "@/styles/main.css";
import { Contact } from "@/components/global/Contact";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-green-300 dark:bg-green-800">
      <NextNProgress color="#375C64" />

      <Header />

      <Component {...pageProps} />

      <Footer />

      <Contact />
    </div>
  );
}

export default MyApp;
