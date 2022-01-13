import { getSocialMedia } from "@/utils/getSocialMedia";
import Image from "next/image";
import Logo from "@/static/logo.svg";

export function Footer() {
  const socialMedia = getSocialMedia();

  return (
    <footer className="bg-white-400">
      <section className=" flex justify-between items-center container mx-auto px-5 py-10">
        <div>
          <h3 className="font-semibold my-3">Redes</h3>
          <ul className="flex flex-col">
            {socialMedia.map(({ id, link, name }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 my-1"
              >
                {name}
              </a>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="text-xl mr-3">
            <h3 className="my-2">Alexander Granados</h3>
            <hr className="w-3/4 mx-auto" />
          </div>
          <Image alt="g1alexander" src={Logo} width={40} height={40} />
        </div>
      </section>
      <div className="text-white-700 bg-white-500 text-center py-3">
        Copyright &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
