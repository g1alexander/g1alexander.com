import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import "@/styles/code.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
