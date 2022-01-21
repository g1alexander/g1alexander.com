export function Iframe({ srcMe }) {
  return (
    <iframe
      className="mx-auto xs:w-auto md:w-7/12 xs:h-72 md:h-96"
      src={srcMe}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
