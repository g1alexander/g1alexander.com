import { getAllFilesMetadata } from "@/lib/mdx";
import { HeadComponent } from "@/components/global/Head";
import { ProjectsPreview } from "@/components/projects/ProjectsPreview";

export default function Home({ blog, projects }) {
  let vue = "vue";
  console.log(vue);
  return (
    <>
      <HeadComponent />

      <main>
        <div className="mx-auto xs:w-11/12 mds:w-9/12">
          <div className="w-3/4 mx-auto py-32">
            <h1 className="text-4xl  text-center">
              Hola👋🏼 Soy Alexander Granados, desarrollador Front-end en{" "}
              <span className="font-light written">
                <span className="text-tech-vue font-semibold">Vue</span>/
                <span className="text-tech-react font-semibold">React</span>
              </span>
            </h1>
          </div>
          <ProjectsPreview />
        </div>
      </main>
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
