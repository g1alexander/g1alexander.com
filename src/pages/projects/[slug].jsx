import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { HeadComponent } from "@/components/global/Head";
import MDXComponents from "@/components/md/MDXComponent";

export default function Post({ source, frontmatter }) {
  return (
    <>
      <Header />

      <HeadComponent frontmatter={frontmatter} />

      <main className="container mx-auto md:px-5 my-10">
        <MDXRemote components={MDXComponents} {...source} />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug, "projects");

  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const projects = await getFiles("projects");

  const paths = projects.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
