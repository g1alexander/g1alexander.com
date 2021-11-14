import { mdiGithub, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

export function NavbarMobile({ setView }) {
  return (
    <section className="fixed h-90vh w-full flex flex-col justify-center items-center bg-green-300 dark:bg-green-800">
      <div className="w-full text-center">
        <button onClick={() => setView(false)}>
          <Link href="/">
            <a className="text-green-800 dark:text-green-300 font-bold">
              Inicio
            </a>
          </Link>
        </button>
        <span className="h-2px my-4 w-full block bg-gray-300 dark:bg-green-300"></span>
      </div>

      <div className="w-full text-center">
        <button onClick={() => setView(false)}>
          <Link href="/projects">
            <a className="text-green-800 dark:text-green-300 font-bold">
              Proyectos
            </a>
          </Link>
        </button>
        <span className="h-2px my-4 w-full block bg-gray-300 dark:bg-green-300"></span>
      </div>

      <div className="w-full text-center">
        <button onClick={() => setView(false)}>
          <Link href="/blog">
            <a className="text-green-800 dark:text-green-300 font-bold">Blog</a>
          </Link>
        </button>
        <span className="h-2px my-4 w-full block bg-gray-300 dark:bg-green-300"></span>
      </div>

      <div className="w-full text-center font-bold">
        <a
          className="text-green-800 dark:text-green-300 flex justify-center"
          href=""
          target="_blank"
          rel="noopener"
        >
          <Icon path={mdiLinkedin} size={1} />
          Linkedin
        </a>
        <span className="h-2px my-4 w-full block bg-gray-300 dark:bg-green-300"></span>
      </div>

      <div className="w-full text-center font-bold">
        <a
          className="text-green-800 dark:text-green-300 flex justify-center"
          href=""
          target="_blank"
          rel="noopener"
        >
          <Icon path={mdiGithub} size={1} />
          Github
        </a>
        <span className="h-2px my-4 w-full block bg-gray-300 dark:bg-green-300"></span>
      </div>
    </section>
  );
}
