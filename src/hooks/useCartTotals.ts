import { products } from "../data";
import { useBundleStore } from "../store/useBundleStore";

export function useCartTotals() {
  const cart = useBundleStore((state) => state.cart);

  const subtotal = cart.reduce((total, item) => {
    const product = products.find(
      (product) => product.id === item.productId
    );

    if (!product) return total;

    return total + product.price * item.quantity;
  }, 0);

  const compareTotal = cart.reduce((total, item) => {
    const product = products.find(
      (product) => product.id === item.productId
    );

    if (!product) return total;

    const comparePrice =
      product.compareAtPrice ?? product.price;

    return total + comparePrice * item.quantity;
  }, 0);

  const savings = compareTotal - subtotal;

  const shipping = 0;

  return {
    subtotal,
    compareTotal,
    savings,
    shipping,
  };
}