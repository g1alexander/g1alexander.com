import error from "@/styles/404.module.css";
import Error404 from "@/static/404.png";
import Image from "next/image";
import Link from "next/link";

// pages/404.js
export default function Custom404() {
  return (
    <article className={error.container_error}>
      <div className={`${error.title} text-3xl`}>404</div>
      <div className={error.img}>
        <Image
          src={Error404}
          width={540}
          height={447}
          alt="404"
          className={error.img_individual}
        />
      </div>
      <div className={error.description}>
        <h1>Tengo malas noticias para ti </h1>
        <p>
          La pagina que buscas no existe, o no esta disponible en este momento.
        </p>
        <Link href="/">
          <a>
            <button>Volver al inicio</button>
          </a>
        </Link>
      </div>
    </article>
  );
}
