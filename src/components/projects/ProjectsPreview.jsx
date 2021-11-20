import { useMatchMedia } from "@/hooks/useMatchMedia";
import Image from "next/image";

export function ProjectsPreview() {
  const matchMedia = useMatchMedia();

  return (
    <>
      <section className="md:flex w-full my-7">
        <Image
          src="https://res.cloudinary.com/dlgvxohur/image/upload/v1627482218/proyectos/CatWiki/portada.webp"
          alt="Picture of the author"
          width={290}
          height={210}
          layout={!matchMedia && "responsive"}
          className="rounded w-1/5"
        />
        <div className="xs:ml-0 md:ml-3 w-4/5 xs:mt-2 md:mt-0">
          <h3 className="font-bold text-green-800 dark:text-green-300 text-2xl xs:mb-3 md:mb-5">
            Designing Dashboards
          </h3>
          <div className="mb-4">
            <span className="bg-green-500 text-green-300 font-semibold rounded-xl mr-2 px-2">
              2020
            </span>
            <span className="text-green-400 font-semibold">Dashboard</span>
          </div>
          {matchMedia && (
            <p className="text-green-800 dark:text-green-300">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
