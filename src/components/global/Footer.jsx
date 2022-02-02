import { getSocialMedia, secciones } from "@/utils/getSocialMedia";
import Image from "next/image";
import Logo from "@/static/logo.svg";
import LogoDark from "@/static/logo-dark.svg";
import Link from "next/link";
import { GlobalContext } from "@/utils/getGlobalContext";
import { useContext } from "react";

export function Footer() {
  const socialMedia = getSocialMedia();
  const global = useContext(GlobalContext);

  return (
    <footer className="bg-white-400 dark:bg-dark-700 text-black-300 dark:text-dark-100">
      <section className="md:flex justify-between items-center container mx-auto md:px-5 py-10">
        <section className="flex xs:gap-7 md:gap-16">
          <div className="xs:mb-8 md:mb-0">
            <h3 className="font-semibold my-3">Redes</h3>
            <ul className="flex flex-col">
              {socialMedia.map(({ id, link, name }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 my-1 hover:underline"
                >
                  {name}
                </a>
              ))}
            </ul>
          </div>
          <div className="xs:mb-5 md:mb-0">
            <h3 className="font-semibold my-3">Secciones</h3>
            <ul className="flex flex-col">
              {secciones.map(({ id, link, name, http }) => (
                <a
                  key={id}
                  href={link}
                  target={http ? "_blank" : undefined}
                  rel="noreferrer"
                  className="hover:text-blue-500 my-1 hover:underline"
                >
                  {name}
                </a>
              ))}
            </ul>
          </div>
        </section>
        <Link href="/">
          <a>
            <div className="flex items-center">
              <div className="text-xl mr-3">
                <h3 className="my-2">Alexander Granados</h3>
                <hr className="w-3/4 mx-auto" />
              </div>
              <Image
                alt="g1alexander"
                src={global.darkMode ? LogoDark : Logo}
                width={40}
                height={40}
              />
            </div>
          </a>
        </Link>
      </section>
      <div className="text-white-700 dark:text-dark-200 bg-white-500 dark:bg-dark-800 text-center py-3">
        Copyright &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
