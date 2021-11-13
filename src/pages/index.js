import Link from "next/link";
import Image from "next/image";
import { getAllFilesMetadata } from "@/lib/mdx";
import HeadComponent from "@/components/Head";

export default function Home({ blog, projects }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <HeadComponent />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center dark:bg-green-300 bg-pink-300">
        <h1 className="text-6xl font-bold">Blog next</h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {blog.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <a>
                <h3 className="text-2xl font-bold">{blog.title} &rarr;</h3>
                <p className="mt-4 text-xl">{blog.date}</p>
              </a>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {projects.map((projects) => (
            <Link
              key={projects.slug}
              href={`/projects/${projects.slug}`}
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <a>
                <h3 className="text-2xl font-bold">{projects.title} &rarr;</h3>
                <p className="mt-4 text-xl">{projects.date}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            width={50}
            height={50}
            src="/vercel.svg"
            alt="Vercel Logo"
            className="h-4 ml-2"
          />
        </a>
      </footer>
    </div>
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
