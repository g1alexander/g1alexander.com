import Head from "next/head";

export function HeadComponent({ frontmatter }) {
  return (
    <Head>
      <title>
        Alexander Granados 👨🏻‍💻{frontmatter && ` | ${frontmatter.title}`}
      </title>
      <meta
        name="description"
        content="Desarrollador Front-end en Vue/React, con experiencia en el desarrollo de aplicaciones web | Alexander Granados"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta author="Alexander Granados" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@g1alexander" />
      <meta name="twitter:domain" content="g1alexander.com" />
      <meta name="twitter:site" content="@g1alexander_" />
      <meta
        name="twitter:title"
        content="Alexander Granados 👨🏼&zwj;💻 | Desarrollador Front-end"
      />
      <meta
        name="twitter:description"
        content="Desarrollador Front-end en Vue/React, con experiencia en el desarrollo de aplicaciones web | Alexander Granados"
      />

      <meta property="og:url" content="https://g1alexander.com" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />
      <meta
        property="og:title"
        content="Alexander Granados 👨🏼&zwj;💻 | Desarrollador Front-end"
      />
      <meta
        property="og:description"
        content="Desarrollador Front-end en Vue/React, con experiencia en el desarrollo de aplicaciones web | Alexander Granados"
      />
      <meta property="og:site_name" content="g1alexander.com" />
      <meta name="author" content="Alexander Granados" />
      <meta
        name="image"
        property="og:image"
        content={
          frontmatter.image
            ? frontmatter.image
            : "https://res.cloudinary.com/dlgvxohur/image/upload/v1642734059/proyectos/peqvhnhihwtxa7asucnl.jpg"
        }
      />
      <meta
        name="image"
        property="og:image"
        content={
          frontmatter.image
            ? frontmatter.image
            : "https://res.cloudinary.com/dlgvxohur/image/upload/v1642734059/proyectos/peqvhnhihwtxa7asucnl.jpg"
        }
      />
      <meta
        property="og:image:alt"
        content="Alexander Granados 👨🏼&zwj;💻 | Desarrollador Front-end"
      />
      <meta property="og:image:type" content="image/jpeg" />

      <meta
        name="google-site-verification"
        content="ebs9aewz121lf073Ec1gv0CYbAAuQvftrDXOQ100cpI"
      />
    </Head>
  );
}
