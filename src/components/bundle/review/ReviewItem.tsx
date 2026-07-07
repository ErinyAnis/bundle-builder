import type { Product } from "../../../types";
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

  return (
    <article className="flex items-center gap-4 py-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-16 w-16 rounded-lg object-contain"
      />

      <div className="flex-1">
        <h3 className="font-medium">{product.title}</h3>

        <p className="mt-1 text-sm text-slate-500">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <QuantityStepper productId={product.id} variantId={variantId} />
    </article>
  );
}
