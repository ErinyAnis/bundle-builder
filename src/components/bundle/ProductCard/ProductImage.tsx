interface ProductImageProps {
  image: string;
  title: string;
}

export default function ProductImage({ image, title }: ProductImageProps) {
  return (
    <div className="mt-8 flex justify-center">
      <img
        src={image}
        alt={title}
        className="
        mx-auto
        h-40
        w-auto
        object-contain
      "
      />
    </div>
  );
}
