import Image from "next/image";

export function Skills({ skills }) {
  // console.log(skills);
  return skills.map(({ id, name, logo, logoColor, color }) => (
    <span key={id} className="mr-2">
      <img
        alt={name}
        src={`https://img.shields.io/badge/-${name}-${color}?&logo=${logo}&logoColor=${logoColor}`}
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
