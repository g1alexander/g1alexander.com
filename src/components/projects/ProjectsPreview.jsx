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
      </section>
    </>
  );
}
