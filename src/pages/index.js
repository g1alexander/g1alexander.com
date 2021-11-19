import { getAllFilesMetadata } from "@/lib/mdx";
import { HeadComponent } from "@/components/global/Head";

export default function Home({ blog, projects }) {
  return (
    <>
      <HeadComponent />

      <main className="flex-grow">fgdf</main>
    </>
  );
}

export async function getStaticProps() {
  const blog = await getAllFilesMetadata("blog");
  const projects = await getAllFilesMetadata("projects");
  return {
    props: {
      blog,
      projects,
    },
  };
}
