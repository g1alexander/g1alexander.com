import { getSocialMedia } from "@/utils/getSocialMedia";
import Icon from "@mdi/react";

export function Footer() {
  const socialMedia = getSocialMedia();
  return (
    <footer className="flex flex-col justify-center items-center py-8">
      <section className="flex mb-3">
        {socialMedia.map(({ id, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noreferrer">
            <Icon
              path={icon}
              size={1.4}
              className="text-green-800 dark:text-green-300 mx-2"
            />
          </a>
        ))}
      </section>
      <span className="text-green-800 dark:text-green-300">
        Copyright &copy; {new Date().getFullYear()} All rights reserved.
      </span>
    </footer>
  );
}
