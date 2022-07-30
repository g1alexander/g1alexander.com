import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/static/logo.svg";
import LogoDark from "@/static/logo-dark.svg";
import Icon from "@mdi/react";
import { Toggle } from "./Toggle";
import { getSocialMedia } from "@/utils/getSocialMedia";
import { GlobalContext } from "@/utils/getGlobalContext";
import { useContext } from "react";

export function HeaderDesktop() {
  const { pathname } = useRouter();
  const socialMedia = getSocialMedia();

  const global = useContext(GlobalContext);

  return (
    <>
      <div className="bg-white-300 dark:bg-dark-500 h-12">
        <section className="container mx-auto flex justify-between items-center h-full px-5">
          <span></span>
          <ul>
            <li className="flex">
              {socialMedia.map(({ id, link, icon, color, name }) => (
                <a key={id} href={link} target="_blank" rel="noreferrer">
                  <Icon
                    path={icon}
                    size={1}
                    className={`${
                      color === 800
                        ? "text-white-800 dark:text-dark-300"
                        : "text-white-600 dark:text-dark-400"
                    } ${
                      name === "LinkedIn"
                        ? "hover:text-social-linkedin dark:hover:text-social-linkedin"
                        : name === "Github"
                        ? "hover:text-social-github dark:hover:text-white-400"
                        : name === "Twitter"
                        ? "hover:text-social-twitter dark:hover:text-social-twitter"
                        : name === "Instagram"
                        ? "hover:text-social-instagram dark:hover:text-social-instagram"
                        : ""
                    } mx-2`}
                  />
                </a>
              ))}
            </li>
          </ul>
        </section>
      </div>
      <header className="container mx-auto flex justify-between items-center px-5 pt-5">
        <div className="flex">
          <Link href="/">
            <a className="mr-5">
              <Image
                src={global.darkMode ? LogoDark : Logo}
                width={50}
                height={50}
                alt="g1alexander"
              />
            </a>
          </Link>

          <Toggle />
        </div>
        <nav>
          <ul className="flex">
            <li className="mr-5">
              <Link href="/">
                <a
                  className={`hover:underline ${
                    pathname === "/"
                      ? "text-blue-500 dark:text-dark-blue"
                      : "active-link"
                  }`}
                >
                  Inicio
                </a>
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/sobre-mi">
                <a
                  className={`hover:underline ${
                    pathname === "/sobre-mi"
                      ? "text-blue-500 dark:text-dark-blue"
                      : "active-link"
                  }`}
                >
                  Sobre mí
                </a>
              </Link>
            </li>
            <li className="mr-5">
              <a
                className={`hover:underline ${
                  pathname === "/blog"
                    ? "text-blue-500 dark:text-dark-blue"
                    : "active-link"
                }`}
                href="https://dev.to/g1alexander/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Blog
              </a>
            </li>
            <li className="mr-3">
              <a
                className={`hover:underline ${
                  pathname === "/blog"
                    ? "text-blue-500 dark:text-dark-blue"
                    : "active-link"
                }`}
                href="https://drive.google.com/file/d/1q1ebhUgKT3FtupZxazOLgW48gVMUJFb3/view"
                target="_blank"
                rel="noreferrer noopener"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
