import { useBundleStore } from "../store/useBundleStore";

export function useIsProductSelected(
  productId: string
) {
  return useBundleStore((state) =>
    state.cart.some(
      (item) =>
        item.productId === productId &&
        item.quantity > 0
    )
  );
}