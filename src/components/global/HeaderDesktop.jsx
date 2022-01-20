import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/static/logo.svg";
import Icon from "@mdi/react";
import { getSocialMedia } from "@/utils/getSocialMedia";

export function HeaderDesktop() {
  const { pathname } = useRouter();
  const socialMedia = getSocialMedia();

  return (
    <>
      <div className="bg-white-300 h-12 ">
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
                      color === 800 ? "text-white-800" : "text-white-600"
                    } ${
                      name === "LinkedIn"
                        ? "hover:text-social-linkedin"
                        : name === "Github"
                        ? "hover:text-social-github"
                        : name === "Twitter"
                        ? "hover:text-social-twitter"
                        : name === "Instagram"
                        ? "hover:text-social-instagram"
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
            <a>
              <Image src={Logo} width={50} height={50} alt="g1alexander" />
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex">
            <li className="mr-5">
              <Link href="/">
                <a
                  className={`hover:underline ${
                    pathname === "/" ? "text-blue-500" : "active-link"
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
                    pathname === "/sobre-mi" ? "text-blue-500" : "active-link"
                  }`}
                >
                  Sobre mí
                </a>
              </Link>
            </li>
            <li className="mr-5">
              <a
                className={`hover:underline ${
                  pathname === "/blog" ? "text-blue-500" : "active-link"
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
                  pathname === "/blog" ? "text-blue-500" : "active-link"
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
