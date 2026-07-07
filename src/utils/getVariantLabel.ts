import type { Product } from "../types";

export function getVariantLabel(
  product: Product,
  variantId?: string
) {
  if (!variantId) return "";

  return (
    product.variants?.find(
      (variant) => variant.id === variantId
    )?.label ?? ""
  );
}