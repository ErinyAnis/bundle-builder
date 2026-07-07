import type { Product } from "../../../types";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="mt-8 flex justify-center">
      <img
        src={product.image}
        alt={product.title}
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
