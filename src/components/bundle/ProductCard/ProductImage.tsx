import type { Product } from "../../../types";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  return (
    <div
      className="
lg:mt-8 px-2 h-30 sm:h-30
lg:h-30 min-w-20
"
    >
      <img
        src={product.image}
        alt={product.title}
        className="
mx-auto

h-full
w-auto
object-contain
transition-transform
duration-300
group-hover:scale-105
"
      />
    </div>
  );
}
