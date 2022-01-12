import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import "@/styles/main.css";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <NextNProgress color="#0333FF" />

      <Header />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
