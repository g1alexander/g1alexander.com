import Head from "next/head";

export function HeadComponent({ frontmatter }) {
  //TODO: cambiar la image de la linea 22 y 36
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

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@g1alexander" />
      <meta name="twitter:creator" content="@g1alexander" />
      <meta
        property="og:url"
        content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/"
      />
      <meta
        property="og:title"
        content={`Alexander Granados${
          frontmatter && ` | ${frontmatter.title}`
        }`}
      />
      <meta
        property="og:description"
        content="Portfolio and blog website by g1alexander."
      />
      <meta
        property="og:image"
        content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"
      />
    </Head>
  );
}
