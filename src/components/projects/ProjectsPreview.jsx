import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRightThin, mdiCalendarMonth } from "@mdi/js";

export function ProjectsPreview({ data }) {
  return (
    <>
      <h2 className="font-semibold text-xl">Proyectos ‍💻</h2>
      <hr className="my-6" />
      <section className="md:flex w-full mt-7 mb-10 grid-me">
        {data.map((project) => (
          <div key={project.title} className="mb-5">
            <span className="flex gap-1 text-white-700">
              <Icon path={mdiCalendarMonth} size={1} />{" "}
              {new Date(project.date).toDateString("es-ES")}
            </span>
            <Link href={`/projects/${project.slug}`}>
              <a>
                <h3 className="my-2 font-bold text-lg">{project.title}</h3>
                <p className="my-2">{project.description}</p>
                <span className="text-blue-500 flex items-center font-semibold">
                  Ver más{" "}
                  <Icon path={mdiArrowRightThin} size={1} className="pt-1" />
                </span>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
