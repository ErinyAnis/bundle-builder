import type { Product } from "../../../types";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  return (
    <div
      className="
mt-8 flex justify-center px-4
"
    >
      <img
        src={product.image}
        alt={product.title}
        className="
mx-auto
h-32
sm:h-36
lg:h-44
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
