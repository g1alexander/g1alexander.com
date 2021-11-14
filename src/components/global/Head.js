import Head from "next/head";

export function HeadComponent({ frontmatter }) {
  return (
    <Head>
      <title>
        Alexander Granados{frontmatter && ` | ${frontmatter.title}`}
      </title>
      <meta
        name="description"
        content="Portfolio and blog website by g1alexander"
      />

      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#DBF0EB" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
    </Head>
  );
}
