import { useBundleStore } from "../store/useBundleStore";
import { findCartItem } from "../utils/cart";

export function useCartQuantity(
  productId: string,
  variantId?: string
) {
  return useBundleStore((state) => {
    const item = findCartItem(
      state.cart,
      productId,
      variantId
    );

    return item?.quantity ?? 0;
  });
}