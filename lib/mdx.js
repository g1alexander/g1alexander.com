import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = (folder) =>
  fs.readdirSync(path.join(root, `content/${folder}`));

export const getFileBySlug = async (slug, folder) => {
  const mdxSource = fs.readFileSync(
    path.join(root, `content/${folder}`, `${slug}.mdx`),
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

export const getAllFilesMetadata = (folder) => {
  const files = getFiles(folder);

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, `content/${folder}`, postSlug),
      "utf8"
    );

    const { data } = matter(mdxSource);

    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};
