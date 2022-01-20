import { mdiGithub, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

export function NavbarMobile({ setView }) {
  return (
    <section className="fixed top-0 z-40 h-screen w-full flex flex-col justify-center items-center bg-white-400">
      <div className="w-full text-center">
        <button onClick={() => setView(false)}>
          <Link href="/">
            <a className="text-black-300 font-bold">Inicio</a>
          </Link>
        </button>
        <span className="h-2px my-4 w-full block bg-white-500"></span>
      </div>

      <div className="w-full text-center">
        <button onClick={() => setView(false)}>
          <Link href="/sobre-mi">
            <a className="text-black-300 font-bold">Sobre mí</a>
          </Link>
        </button>
        <span className="h-2px my-4 w-full block bg-white-500"></span>
      </div>

      <div className="w-full text-center">
        <button onClick={() => setView(false)}>
          <a
            href="https://dev.to/g1alexander/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-black-300 font-bold"
          >
            Blog
          </a>
        </button>
        <span className="h-2px my-4 w-full block bg-white-500"></span>
      </div>

      <div className="w-full text-center">
        <button onClick={() => setView(false)}>
          <a
            href="https://drive.google.com/file/d/1q1ebhUgKT3FtupZxazOLgW48gVMUJFb3/view"
            target="_blank"
            rel="noreferrer noopener"
            className="text-black-300 font-bold"
          >
            CV
          </a>
        </button>
        <span className="h-2px my-4 w-full block bg-white-500"></span>
      </div>

      <div className="w-full text-center font-bold">
        <a
          className="text-black-300 flex justify-center"
          href=""
          target="_blank"
          rel="noopener"
        >
          <Icon path={mdiLinkedin} size={1} />
          Linkedin
        </a>
        <span className="h-2px my-4 w-full block bg-white-500"></span>
      </div>

      <div className="w-full text-center font-bold">
        <a
          className="text-black-300 flex justify-center"
          href=""
          target="_blank"
          rel="noopener"
        >
          <Icon path={mdiGithub} size={1} />
          Github
        </a>
        <span className="h-2px my-4 w-full block bg-white-500"></span>
      </div>
    </section>
  );
}
