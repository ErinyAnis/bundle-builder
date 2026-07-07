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
"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-16 w-16 rounded-lg object-contain"
      />

      <div className="flex-1">
        <h3 className="font-medium text-slate-900">{product.title}</h3>

        {variantLabel && (
          <p className="mt-1 text-sm text-slate-500">{variantLabel}</p>
        )}
      </div>

      <div className="flex flex-col items-end gap-2">
        <QuantityStepper productId={product.id} variantId={variantId} />

        <span className="text-sm font-semibold">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </article>
  );
}
