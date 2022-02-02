import { useMatchMedia } from "@/hooks/useMatchMedia";
import Image from "next/image";

export function Info({ data }) {
  const isDesktop = useMatchMedia();

  return data.map(
    ({ id, title, skills, description, img, reason, ubication, date }) => (
      <div className="md:flex w-full xs:mb-8 md:mb-0" key={id}>
        <section className="flex xs:justify-between xs:items-center md:items-start md:justify-start xs:mb-3 md:mb-0">
          <div className="w-32 font-light">
            <h4>{ubication}</h4>
            <span className="text-white-700 dark:text-dark-200">
              {date.start} {date.start && "-"}{" "}
              <span
                className={`${
                  reason.text && "text-blue-500 dark:text-dark-blue"
                }`}
              >
                {date.end}
              </span>
            </span>
          </div>
          <div className="text-center mx-5">
            <div
              className={`border-personal mx-auto py-1 ${
                reason.border
                  ? "border-color-blue dark:border-dark-blue"
                  : "border-color-gray dark:border-dark-800"
              }`}
            >
              <Image
                alt={title.company}
                src={img}
                width={70}
                height={70}
                className="rounded-full"
              ></Image>
            </div>

            {reason.hr && isDesktop && (
              <hr className="w-1 border-0 border-l-2 h-28 mx-auto border-white-500 dark:border-dark-800" />
            )}
          </div>
        </section>
        <div className="w-11/12">
          <h3 className="font-semibold text-lg mb-2">
            {title.rol} {title.company && "-"}{" "}
            <a
              className="text-blue-500 dark:text-dark-blue hover:underline"
              href={title.companyLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {title.company}
            </a>
          </h3>
          <p className="font-light">
            {description}
            <br />
            <span className="font-bold">
              {skills.map((skill) =>
                skills[skills.length - 1] === skill ? skill : `${skill}, `
              )}
            </span>
          </p>
        </div>
      </div>
    )
  );
}

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
