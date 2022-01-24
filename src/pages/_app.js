import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import "@/styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <NextNProgress color="#0333FF" />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
