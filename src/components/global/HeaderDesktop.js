import { mdiLaptop } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Toggle } from "@/components/global/Toggle";

export function HeaderDesktop() {
  const { pathname } = useRouter();

  return (
    <header className="container mx-auto flex justify-between px-5 py-5">
      <div className="flex">
        <Icon
          path={mdiLaptop}
          size={1.1}
          className="text-green-800 dark:text-green-300 mr-5"
        />
        <Toggle />
      </div>
      <nav className="font-bold">
        <ul className="flex">
          <li className="mr-5">
            <Link href="/">
              <a
                className={
                  pathname === "/"
                    ? "text-green-800 dark:text-green-300"
                    : "active-link"
                }
              >
                Inicio
              </a>
            </Link>
          </li>
          <li className="mr-5">
            <Link href="/projects">
              <a
                className={
                  pathname === "/projects"
                    ? "text-green-800 dark:text-green-300"
                    : "active-link"
                }
              >
                Proyectos
              </a>
            </Link>
          </li>
          <li className="mr-5">
            <Link href="/blog">
              <a
                className={
                  pathname === "/blog"
                    ? "text-green-800 dark:text-green-300"
                    : "active-link"
                }
              >
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
