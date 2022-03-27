import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

import { HeadComponent } from "@/components/global/Head";

export default function pawayDigital() {
  return (
    <>
      <Header />
      <HeadComponent frontmatter={{ title: "pawayDigital" }} />

      <main className="container mx-auto md:px-5 md:my-10 dark:text-dark-100">
        <section className="mb-12">
          <h2 className="text-xl font-bold xs:mb-6 xs:pt-6 md:pt-0 md:mb-0 md:my-6">
            ¿Qué es Paway Digital? 🤔
          </h2>
          en construccion 🚧
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
