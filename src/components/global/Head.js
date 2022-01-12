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

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta author="Alexander Granados" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@g1alexander" />
      <meta name="twitter:domain" content="g1alexander.com" />
      <meta name="twitter:site" content="@g1alexander_" />
      <meta
        name="twitter:title"
        content="Alexander Granados 👨🏼&zwj;💻 | Desarrollador Web"
      />
      <meta
        name="twitter:description"
        content="Portfolio and blog website by g1alexander | Alexander Granados"
      />

      <meta property="og:url" content="https://g1alexander.com" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />
      <meta
        property="og:title"
        content="Alexander Granados 👨🏼&zwj;💻 | Desarrollador Web"
      />
      <meta
        property="og:description"
        content="Portfolio and blog website by g1alexander | Alexander Granados"
      />
      <meta property="og:site_name" content="g1alexander.com" />
      <meta name="author" content="Alexander Granados" />
      <meta
        name="image"
        property="og:image"
        content="https://res.cloudinary.com/dlgvxohur/image/upload/v1641951749/proyectos/g1alexander.jpg"
      />
      <meta
        name="image"
        property="og:image"
        content="https://res.cloudinary.com/dlgvxohur/image/upload/v1641951749/proyectos/g1alexander.jpg"
      />
      <meta
        property="og:image:alt"
        content="Alexander Granados 👨🏼&zwj;💻 | Desarrollador Web"
      />
      <meta property="og:image:type" content="image/jpeg" />

      <meta
        name="google-site-verification"
        content="ebs9aewz121lf073Ec1gv0CYbAAuQvftrDXOQ100cpI"
      />
    </Head>
  );
}
