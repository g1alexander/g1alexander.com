import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { HeadComponent } from "@/components/global/Head";
import MDXComponents from "@/components/md/MDXComponent";

export default function Post({ source, frontmatter }) {
  return (
    <>
      <HeadComponent frontmatter={frontmatter} />

      <MDXRemote components={MDXComponents} {...source} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug, "blog");

  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const blog = await getFiles("blog");

  const paths = blog.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
