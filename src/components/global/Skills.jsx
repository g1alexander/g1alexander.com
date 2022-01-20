import Image from "next/image";

export function Skills({ skills }) {
  return skills.map(({ id, name, logo, logoColor, color }) => (
    <span key={id} className="mr-2">
      <Image
        alt={name}
        src={`https://img.shields.io/badge/-${name}-${color}?&logo=${logo}&logoColor=${logoColor}`}
        width={70}
        height={25}
      />
    </span>
  ));
}

export async function getStaticProps() {
  return {
    props: {
      skills,
    },
  };
}
