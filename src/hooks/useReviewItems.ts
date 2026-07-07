import { products } from "../data";
import { useBundleStore } from "../store/useBundleStore";
import type { Product } from "../types";

export function useReviewItems() {
  const cart = useBundleStore((state) => state.cart);

  return cart
  .map((cartItem) => {
    const product = products.find(
      (item) => item.id === cartItem.productId
    );

    if (!product) return null;

    return {
      product,
      quantity: cartItem.quantity,
      variantId: cartItem.variantId,
    };
  })
  .filter(
  (
    item
  ): item is {
    product: Product;
    quantity: number;
    variantId: string | undefined;
  } => item !== null
);
}