import type { CartItem } from "../types";

export function isSameCartItem(
  item: CartItem,
  productId: string,
  variantId?: string,
) {
  return item.productId === productId && item.variantId === variantId;
}

export function findCartItem(
  cart: CartItem[],
  productId: string,
  variantId?: string,
) {
  return cart.find((item) => isSameCartItem(item, productId, variantId));
}
