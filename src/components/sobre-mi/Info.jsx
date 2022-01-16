import Image from "next/image";

export function Info({ data }) {
  return data.map(
    ({ id, title, skills, description, img, reason, ubication, date }) => (
      <div className="flex w-full" key={id}>
        <div className="w-1/5">
          <h4>{ubication}</h4>
          <span className="text-white-700">
            {date.start} -{" "}
            <span className={`${reason.text && "text-blue-500"}`}>
              {date.end}
            </span>
          </span>
        </div>
        <div className="text-center w-1/5">
          <div
            className={`border-personal mx-auto py-1 ${
              reason.border ? "border-color-blue" : "border-color-gray"
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

          {reason.hr && <hr className="w-1 border-0 border-l-2 h-28 mx-auto" />}
        </div>
        <div className="w-11/12">
          <h3 className="font-semibold text-lg mb-2">
            {title.rol} -{" "}
            <a
              className="text-blue-500 hover:underline"
              href={title.companyLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {title.company}
            </a>
          </h3>
          <p>
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
