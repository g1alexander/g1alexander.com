import { Skills } from "@/components/global/Skills";
import { Info } from "@/components/sobre-mi/Info";
import { skills, tools } from "@/utils/getSkills";
import { exp, education } from "@/utils/getInfo";

export default function SobreMi() {
  return (
    <div className="container mx-auto px-5 my-10">
      <section className="mb-12">
        <h2 className="text-xl font-bold my-6">Sobre mí 🤔</h2>
        <p className="mb-2">
          Soy desarrollador front-end trabajando en remoto para Agricapital SAS
          de Medellin, Colombia. Estudié desarrollo de software en el ITP, en
          los últimos 2 años he trabajando proyectos web tanto en la parte
          frontend como backend, encontrando en ellos un mundo maravilloso en el
          cual se pueden crear soluciones, dar vida a sitios y páginas web a
          partir de un prototipo 🤓
        </p>
        <p className="mb-2">
          En mi cuenta personal de GitHub 🖥 podéis encontrar todo mi trabajo
          personal que realizo tanto individual como en comunidad.
        </p>
        <p className="mb-2">
          Tambien tengo un profundo interés por la filosofía estoica, la
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
    </div>
  );
}
