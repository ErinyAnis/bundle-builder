import type { Product } from "../../../types";

interface ProductPriceProps {
  product: Product;
}

export default function ProductPrice({
  product: { price, compareAtPrice },
}: ProductPriceProps) {
  return (
    <div className="flex items-center gap-2">
      {compareAtPrice && (
        <span className="text-sm text-gray-400 line-through">
          ${compareAtPrice.toFixed(2)}
        </span>
      )}

      <span className="text-xl font-bold">${price.toFixed(2)}</span>
    </div>
  );
}
