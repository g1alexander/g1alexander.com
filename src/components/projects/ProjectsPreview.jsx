import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRightThin, mdiCalendarMonth } from "@mdi/js";

export function ProjectsPreview({ data }) {
  return (
    <>
      <h2 className="font-semibold text-xl text-black-300 dark:text-dark-100">
        Proyectos ‍💻
      </h2>
      <hr className="my-6 border-white-500 dark:border-dark-800" />
      <section className="md:flex w-full mt-7 mb-10 grid-me">
        {data.map((project) => (
          <div key={project.title} className="mb-5">
            <span className="flex gap-1 text-white-700 dark:text-dark-200">
              <Icon path={mdiCalendarMonth} size={1} />{" "}
              {new Date(project.date).toDateString("es-ES")}
            </span>
            <Link href={`/projects/${project.slug}`}>
              <a>
                <h3 className="my-2 font-bold text-lg text-black-300 dark:text-dark-100">
                  {project.title}
                </h3>
                <p className="my-2 text-black-300 dark:text-dark-100 font-light">
                  {project.description}
                </p>
                <span className="text-blue-500 dark:text-dark-blue hover:underline flex items-center font-semibold">
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
