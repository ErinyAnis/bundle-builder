interface Props {
  src: string;
  alt: string;
}

export default function ProductImage({ src, alt }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className="
      mx-auto
      h-44
      object-contain
      "
    />
  );
}
