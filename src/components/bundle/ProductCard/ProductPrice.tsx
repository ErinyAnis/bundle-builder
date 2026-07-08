import type { Product } from "../../../types";

interface ProductPriceProps {
  product: Product;
}

export default function ProductPrice({
  product: { price, compareAtPrice },
}: ProductPriceProps) {
  return (
    <div className="flex items-center flex-col">
      {compareAtPrice && (
        <span className="text-[#D8392B] line-through">
          ${compareAtPrice.toFixed(2)}
        </span>
      )}

      <span className=" font-bold text-[#575757">${price.toFixed(2)}</span>
    </div>
  );
}
