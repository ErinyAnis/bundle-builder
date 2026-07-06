import { useBundleStore } from "../store/useBundleStore";

export function useCartItems() {
  return useBundleStore((state) => state.cart);
}