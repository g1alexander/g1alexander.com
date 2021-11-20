import { getAllFilesMetadata } from "@/lib/mdx";
import { HeadComponent } from "@/components/global/Head";
import { ProjectsPreview } from "@/components/projects/ProjectsPreview";

export default function Home({ blog, projects }) {
  return (
    <>
      <HeadComponent />

      <main>
        <div className="mx-auto xs:w-11/12 mds:w-9/12">
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
