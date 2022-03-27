import Image from "next/image";

export function ImageMe({ src, alt }) {
  return (
    <div className="w-8/12 mx-auto">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        objectFit="cover"
        width={6}
        height={4}
        priority={true}
      />
    </div>
  );
}
