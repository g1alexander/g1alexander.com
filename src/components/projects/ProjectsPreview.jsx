import { useMatchMedia } from "@/hooks/useMatchMedia";
import Image from "next/image";
import Link from "next/link";

export function ProjectsPreview() {
  const matchMedia = useMatchMedia();

  return (
    <>
      <h3 className="font-semibold">Proyectos ‍💻</h3>
      <section className="md:flex w-full mt-7 mb-20 grid-me">
        <Link href={`/blog/`} passHref>
          <Image
            src="https://res.cloudinary.com/dlgvxohur/image/upload/v1627482218/proyectos/CatWiki/portada.webp"
            alt="Picture of the author"
            width={290}
            height={210}
            layout={!matchMedia && "responsive"}
            className="rounded w-1/5"
          />
        </Link>
        <Link href={`/blog/`} passHref>
          <Image
            src="https://res.cloudinary.com/dlgvxohur/image/upload/v1627482218/proyectos/CatWiki/portada.webp"
            alt="Picture of the author"
            width={290}
            height={210}
            layout={!matchMedia && "responsive"}
            className="rounded w-1/5"
          />
        </Link>
        <Link href={`/blog/`} passHref>
          <Image
            src="https://res.cloudinary.com/dlgvxohur/image/upload/v1627482218/proyectos/CatWiki/portada.webp"
            alt="Picture of the author"
            width={290}
            height={210}
            layout={!matchMedia && "responsive"}
            className="rounded w-1/5"
          />
        </Link>
      </section>
    </>
  );
}
