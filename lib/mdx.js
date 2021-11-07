import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, "content"));

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "content", `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = await matter(mdxSource);

  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [require("mdx-prism")],
    },
  });

  return {
    source,
    frontmatter: {
      ...data,
      slug,
    },
  };
};

export const getAllFilesMetadata = () => {
  const files = getFiles();

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "content", postSlug),
      "utf8"
    );

    const { data } = matter(mdxSource);

    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};
