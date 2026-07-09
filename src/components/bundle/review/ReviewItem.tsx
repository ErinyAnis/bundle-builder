import type { Product } from "../../../types";
import { getVariantLabel } from "../../../utils";
import QuantityStepper from "../../ui/QuantityStepper";

interface ReviewItemProps {
  product: Product;
  quantity: number;
  variantId?: string;
}

export default function ReviewItem({
  product,
  quantity,
  variantId,
}: ReviewItemProps) {
  if (quantity === 0) return null;

  const variantLabel = getVariantLabel(product, variantId);

  return (
    <article
      className="
      flex
      items-center
      gap-4
      border-b
      border-slate-200
      py-5
      last:border-0
    "
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-14 w-14 shrink-0 rounded-lg object-contain"
      />

      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-slate-900">{product.title}</h3>

        {variantLabel && (
          <p className="mt-1 text-xs text-slate-500">{variantLabel}</p>
        )}
      </div>

      <QuantityStepper productId={product.id} variantId={variantId} />

      <div className="flex flex-col items-end leading-none">
        {product.compareAtPrice && (
          <span className="text-sm text-slate-400 line-through">
            ${product.compareAtPrice.toFixed(2)}
          </span>
        )}

        <span className="mt-1 text-lg font-semibold text-violet-600">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </article>
  );
}
