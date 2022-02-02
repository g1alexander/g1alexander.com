import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

import { Skills } from "@/components/global/Skills";
import { HeadComponent } from "@/components/global/Head";
import { Info } from "@/components/sobre-mi/Info";
import { skills, tools } from "@/utils/getSkills";
import { exp, education } from "@/utils/getInfo";

export default function SobreMi() {
  return (
    <>
      <Header />

      <HeadComponent frontmatter={{ title: "Sobre mí" }} />

      <main className="container mx-auto md:px-5 md:my-10 dark:text-dark-100">
        <section className="mb-12">
          <h2 className="text-xl font-bold xs:mb-6 xs:pt-6 md:pt-0 md:mb-0 md:my-6">
            Sobre mí 🤔
          </h2>
          <p className="mb-2 font-normal">
            Soy desarrollador front-end trabajando en remoto para Agricapital
            SAS y actualmente vivo en Colombia🇨🇴. Estudié desarrollo de software
            en el ITP, en los últimos 2 años he participado en proyectos web
            tanto en la parte front-end como back-end, encontrando en ellos un
            mundo maravilloso en el cual se pueden crear soluciones, dar vida a
            sitios, aplicaciones y páginas web a partir de un prototipo 🤓
          </p>
          <p className="mb-2 font-normal">
            En mi cuenta personal de GitHub 🖥 podéis encontrar todo mi trabajo
            personal que realizo tanto individual como en comunidad.
          </p>
          <p className="mb-2 font-normal">
            También tengo un profundo interés por la filosofía estoica, la
            meditación y el minimalismo👋🏼🧘️
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold my-6">
            Skills Tecnológicos & Herramientas 🛠
          </h2>
          <div className="text-center my-5">
            <Skills skills={skills} />
          </div>
          <div className="text-center mb-5">
            <Skills skills={tools} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold my-6">Experiencia laboral 👨‍💻</h2>
          <Info data={exp} />
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold my-6">Educación 📚</h2>
          <Info data={education} />
        </section>
      </main>

      <Footer />
    </>
  );
}
